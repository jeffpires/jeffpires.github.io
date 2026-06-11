/**
 * Cloudflare Worker — Guess Where wildcard proxy
 * Forwards yes/no geographic questions to the Anthropic API.
 * Set ANTHROPIC_API_KEY in Workers environment variables (never hardcode).
 */

const ALLOWED_ORIGINS = [
  "https://gaiaanalytica.ch",
  "https://www.gaiaanalytica.ch",
];

const SYSTEM_PROMPT = `You are a geography fact-checker for a deduction game. You will receive a yes/no geographic question and a list of countries currently on the board. Respond ONLY in valid JSON with no other text:
{
  "answer": "yes" | "no" | "some",
  "countries_to_eliminate": [array of country names from the provided list],
  "borderline": [array of ambiguous country names from the provided list],
  "reasoning": "one sentence maximum"
}
Be precise and conservative — only eliminate countries you are certain about. Flag borderline cases rather than guessing. Restrict responses strictly to geographic and factual content. Only reference countries from the provided list.`;

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    const { question, countries } = body;
    if (!question || !Array.isArray(countries) || countries.length === 0) {
      return new Response(JSON.stringify({ error: "Missing question or countries" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    const userMessage = `Question: ${question}\n\nCountries on the board: ${countries.join(", ")}`;

    let anthropicResponse;
    try {
      anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 512,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: userMessage }],
        }),
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Upstream request failed" }), {
        status: 502,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    if (!anthropicResponse.ok) {
      const errText = await anthropicResponse.text();
      return new Response(JSON.stringify({ error: "Anthropic API error", detail: errText }), {
        status: 502,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    const anthropicData = await anthropicResponse.json();
    const rawText = anthropicData?.content?.[0]?.text || "";

    let parsed;
    try {
      // Strip any accidental markdown fences
      const cleaned = rawText.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, "").trim();
      parsed = JSON.parse(cleaned);
    } catch {
      return new Response(JSON.stringify({ error: "Failed to parse AI response", raw: rawText }), {
        status: 502,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    // Sanitize: only return countries that were in the provided list
    const countrySet = new Set(countries);
    parsed.countries_to_eliminate = (parsed.countries_to_eliminate || []).filter(c => countrySet.has(c));
    parsed.borderline = (parsed.borderline || []).filter(c => countrySet.has(c));

    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
    });
  },
};
