const COUNTRIES = [
  {
    name: "Brazil", flag: "🇧🇷", continent: "South America", region: "South America",
    hemisphere_ns: "south", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "tropical", major_mountain_range: false, major_river: true,
    population_tier: "huge", area_tier: "huge", language_family: "Romance",
    government_type: "federal_republic", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: false, drives_left: false, borders_count_tier: "many",
    income_tier: "upper-middle", primary_export: "agriculture",
    fact: "Brazil contains roughly 60% of the Amazon rainforest, the world's largest tropical forest."
  },
  {
    name: "Argentina", flag: "🇦🇷", continent: "South America", region: "South America",
    hemisphere_ns: "south", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "grassland", major_mountain_range: true, major_river: true,
    population_tier: "large", area_tier: "huge", language_family: "Romance",
    government_type: "federal_republic", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: true, drives_left: false, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "agriculture",
    fact: "Argentina is home to both the highest and lowest points in the Western Hemisphere."
  },
  {
    name: "Colombia", flag: "🇨🇴", continent: "South America", region: "South America",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "tropical", major_mountain_range: true, major_river: true,
    population_tier: "large", area_tier: "large", language_family: "Romance",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "energy",
    fact: "Colombia is the only country in South America with coastlines on both the Pacific Ocean and the Caribbean Sea."
  },
  {
    name: "Peru", flag: "🇵🇪", continent: "South America", region: "South America",
    hemisphere_ns: "south", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "mixed", major_mountain_range: true, major_river: true,
    population_tier: "medium", area_tier: "large", language_family: "other",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "minerals",
    fact: "Peru's Machu Picchu sits at 2,430 metres above sea level and was unknown to the outside world until 1911."
  },
  {
    name: "Chile", flag: "🇨🇱", continent: "South America", region: "South America",
    hemisphere_ns: "south", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mixed", major_mountain_range: true, major_river: false,
    population_tier: "medium", area_tier: "large", language_family: "Romance",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "minerals",
    fact: "Chile is the world's longest country from north to south, stretching over 4,300 km."
  },
  {
    name: "Bolivia", flag: "🇧🇴", continent: "South America", region: "South America",
    hemisphere_ns: "south", hemisphere_ew: "west", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "mixed", major_mountain_range: true, major_river: false,
    population_tier: "small", area_tier: "large", language_family: "other",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "minerals",
    fact: "Bolivia has two capitals — Sucre is the constitutional capital and La Paz is the seat of government."
  },
  {
    name: "Venezuela", flag: "🇻🇪", continent: "South America", region: "South America",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "tropical", major_mountain_range: false, major_river: true,
    population_tier: "medium", area_tier: "large", language_family: "Romance",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "upper-middle", primary_export: "energy",
    fact: "Angel Falls in Venezuela is the world's highest uninterrupted waterfall at 979 metres."
  },
  {
    name: "Mexico", flag: "🇲🇽", continent: "North America", region: "Central America & Caribbean",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mixed", major_mountain_range: true, major_river: false,
    population_tier: "huge", area_tier: "large", language_family: "Romance",
    government_type: "federal_republic", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "upper-middle", primary_export: "manufacturing",
    fact: "Mexico City was built on the ruins of Tenochtitlan, the Aztec capital, and slowly sinks several centimetres each year."
  },
  {
    name: "Canada", flag: "🇨🇦", continent: "North America", region: "North America",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "forest", major_mountain_range: true, major_river: true,
    population_tier: "medium", area_tier: "huge", language_family: "Germanic",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: true, g20_member: true,
    nuclear_power: true, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "energy",
    fact: "Canada has the longest coastline of any country in the world at over 202,000 km."
  },
  {
    name: "United States", flag: "🇺🇸", continent: "North America", region: "North America",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mixed", major_mountain_range: true, major_river: true,
    population_tier: "huge", area_tier: "huge", language_family: "Germanic",
    government_type: "federal_republic", eu_member: false, nato_member: true, g20_member: true,
    nuclear_power: true, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "mixed",
    fact: "The United States has the world's largest economy and is the only country to have landed humans on the Moon."
  },
  {
    name: "Cuba", flag: "🇨🇺", continent: "North America", region: "Central America & Caribbean",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: true,
    coastline: "long", dominant_biome: "tropical", major_mountain_range: false, major_river: false,
    population_tier: "small", area_tier: "small", language_family: "Romance",
    government_type: "other", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "none",
    income_tier: "upper-middle", primary_export: "agriculture",
    fact: "Cuba has more doctors per capita than almost any other country in the world."
  },
  {
    name: "Jamaica", flag: "🇯🇲", continent: "North America", region: "Central America & Caribbean",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: true,
    coastline: "medium", dominant_biome: "tropical", major_mountain_range: false, major_river: false,
    population_tier: "small", area_tier: "small", language_family: "Germanic",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "none",
    income_tier: "upper-middle", primary_export: "services",
    fact: "Jamaica was the first Caribbean country to compete in the Winter Olympics and has produced world-record sprinters for decades."
  },
  {
    name: "United Kingdom", flag: "🇬🇧", continent: "Europe", region: "Western Europe",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: true,
    coastline: "long", dominant_biome: "mixed", major_mountain_range: false, major_river: false,
    population_tier: "large", area_tier: "small", language_family: "Germanic",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: true, g20_member: true,
    nuclear_power: true, drives_left: true, borders_count_tier: "few",
    income_tier: "high", primary_export: "services",
    fact: "The UK invented the World Wide Web, the steam engine, and the jet engine — more world-changing inventions per capita than almost anywhere."
  },
  {
    name: "France", flag: "🇫🇷", continent: "Europe", region: "Western Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mixed", major_mountain_range: true, major_river: true,
    population_tier: "large", area_tier: "medium", language_family: "Romance",
    government_type: "unitary_republic", eu_member: true, nato_member: true, g20_member: true,
    nuclear_power: true, drives_left: false, borders_count_tier: "several",
    income_tier: "high", primary_export: "services",
    fact: "France is the world's most visited country, attracting around 90 million tourists per year."
  },
  {
    name: "Germany", flag: "🇩🇪", continent: "Europe", region: "Western Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "forest", major_mountain_range: false, major_river: true,
    population_tier: "large", area_tier: "medium", language_family: "Germanic",
    government_type: "federal_republic", eu_member: true, nato_member: true, g20_member: true,
    nuclear_power: false, drives_left: false, borders_count_tier: "many",
    income_tier: "high", primary_export: "manufacturing",
    fact: "Germany has over 1,500 different types of beer and around 1,300 breweries — more than any other country."
  },
  {
    name: "Spain", flag: "🇪🇸", continent: "Europe", region: "Southern Europe",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mediterranean", major_mountain_range: true, major_river: true,
    population_tier: "medium", area_tier: "medium", language_family: "Romance",
    government_type: "constitutional_monarchy", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "services",
    fact: "Spain has more UNESCO World Heritage Sites than any other country in the world."
  },
  {
    name: "Italy", flag: "🇮🇹", continent: "Europe", region: "Southern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mediterranean", major_mountain_range: true, major_river: false,
    population_tier: "large", area_tier: "medium", language_family: "Romance",
    government_type: "unitary_republic", eu_member: true, nato_member: true, g20_member: true,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "high", primary_export: "manufacturing",
    fact: "Italy contains more UNESCO World Heritage Sites than any other country — 58 at last count."
  },
  {
    name: "Portugal", flag: "🇵🇹", continent: "Europe", region: "Southern Europe",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "mediterranean", major_mountain_range: false, major_river: true,
    population_tier: "small", area_tier: "small", language_family: "Romance",
    government_type: "unitary_republic", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "services",
    fact: "Portugal is the oldest nation-state in Europe, with its current borders established in 1139."
  },
  {
    name: "Netherlands", flag: "🇳🇱", continent: "Europe", region: "Western Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "mixed", major_mountain_range: false, major_river: true,
    population_tier: "medium", area_tier: "small", language_family: "Germanic",
    government_type: "constitutional_monarchy", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "agriculture",
    fact: "About a third of the Netherlands lies below sea level, protected by an extraordinary system of dikes and pumping stations."
  },
  {
    name: "Belgium", flag: "🇧🇪", continent: "Europe", region: "Western Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "mixed", major_mountain_range: false, major_river: false,
    population_tier: "small", area_tier: "small", language_family: "Germanic",
    government_type: "constitutional_monarchy", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: true, drives_left: false, borders_count_tier: "several",
    income_tier: "high", primary_export: "manufacturing",
    fact: "Belgium has three official languages (Dutch, French, and German) and went 541 days without a government in 2010–11."
  },
  {
    name: "Sweden", flag: "🇸🇪", continent: "Europe", region: "Northern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "forest", major_mountain_range: false, major_river: false,
    population_tier: "small", area_tier: "medium", language_family: "Germanic",
    government_type: "constitutional_monarchy", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: true, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "manufacturing",
    fact: "Sweden switched from driving on the left to the right side of the road overnight on September 3, 1967."
  },
  {
    name: "Norway", flag: "🇳🇴", continent: "Europe", region: "Northern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "tundra", major_mountain_range: true, major_river: false,
    population_tier: "small", area_tier: "medium", language_family: "Germanic",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: true, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "energy",
    fact: "Norway's sovereign wealth fund is the world's largest, worth over a trillion dollars — over $200,000 per Norwegian citizen."
  },
  {
    name: "Denmark", flag: "🇩🇰", continent: "Europe", region: "Northern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mixed", major_mountain_range: false, major_river: false,
    population_tier: "small", area_tier: "small", language_family: "Germanic",
    government_type: "constitutional_monarchy", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "manufacturing",
    fact: "Denmark consistently ranks as one of the world's happiest countries and has the oldest national flag still in use."
  },
  {
    name: "Finland", flag: "🇫🇮", continent: "Europe", region: "Northern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "forest", major_mountain_range: false, major_river: false,
    population_tier: "small", area_tier: "medium", language_family: "other",
    government_type: "unitary_republic", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: true, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "manufacturing",
    fact: "Finland has around 188,000 lakes — more lakes per capita than almost anywhere on Earth."
  },
  {
    name: "Poland", flag: "🇵🇱", continent: "Europe", region: "Eastern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "mixed", major_mountain_range: false, major_river: true,
    population_tier: "medium", area_tier: "medium", language_family: "Slavic",
    government_type: "unitary_republic", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "high", primary_export: "manufacturing",
    fact: "Poland has been home to 17 Nobel Prize winners, including Marie Curie, who won the prize twice."
  },
  {
    name: "Ukraine", flag: "🇺🇦", continent: "Europe", region: "Eastern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "grassland", major_mountain_range: false, major_river: true,
    population_tier: "large", area_tier: "large", language_family: "Slavic",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: true, drives_left: false, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "agriculture",
    fact: "Ukraine is the largest country located entirely within Europe and is one of the world's top grain exporters."
  },
  {
    name: "Romania", flag: "🇷🇴", continent: "Europe", region: "Eastern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "mixed", major_mountain_range: true, major_river: true,
    population_tier: "medium", area_tier: "medium", language_family: "Romance",
    government_type: "unitary_republic", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: true, drives_left: false, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "manufacturing",
    fact: "Romania's Transfăgărășan highway, built through the Carpathians, is widely called the world's most scenic road."
  },
  {
    name: "Greece", flag: "🇬🇷", continent: "Europe", region: "Southern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mediterranean", major_mountain_range: false, major_river: false,
    population_tier: "small", area_tier: "small", language_family: "other",
    government_type: "unitary_republic", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "services",
    fact: "Greece has more islands than any country in Europe — about 6,000 in total, of which around 227 are inhabited."
  },
  {
    name: "Switzerland", flag: "🇨🇭", continent: "Europe", region: "Western Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "mixed", major_mountain_range: true, major_river: true,
    population_tier: "small", area_tier: "small", language_family: "Germanic",
    government_type: "federal_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: true, drives_left: false, borders_count_tier: "several",
    income_tier: "high", primary_export: "services",
    fact: "Switzerland has not been at war since 1815 and has not joined NATO, making it one of the world's most durable neutral states."
  },
  {
    name: "Austria", flag: "🇦🇹", continent: "Europe", region: "Western Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "mixed", major_mountain_range: true, major_river: true,
    population_tier: "small", area_tier: "small", language_family: "Germanic",
    government_type: "federal_republic", eu_member: true, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "high", primary_export: "services",
    fact: "Austria was home to Mozart, Beethoven's most productive years, and Sigmund Freud — a remarkable concentration of intellectual history."
  },
  {
    name: "Russia", flag: "🇷🇺", continent: "Europe", region: "Eastern Europe",
    hemisphere_ns: "north", hemisphere_ew: "both", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "forest", major_mountain_range: true, major_river: true,
    population_tier: "huge", area_tier: "huge", language_family: "Slavic",
    government_type: "federal_republic", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: true, drives_left: false, borders_count_tier: "many",
    income_tier: "upper-middle", primary_export: "energy",
    fact: "Russia spans eleven time zones — if you live in the far east, you can see tomorrow's sunrise before Moscow wakes up."
  },
  {
    name: "Turkey", flag: "🇹🇷", continent: "Europe", region: "Southern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mixed", major_mountain_range: true, major_river: true,
    population_tier: "large", area_tier: "large", language_family: "other",
    government_type: "unitary_republic", eu_member: false, nato_member: true, g20_member: true,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "manufacturing",
    fact: "Turkey straddles two continents — Istanbul is the only city in the world that spans Europe and Asia."
  },
  {
    name: "Egypt", flag: "🇪🇬", continent: "Africa", region: "North Africa",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "desert", major_mountain_range: false, major_river: true,
    population_tier: "huge", area_tier: "large", language_family: "Semitic",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "lower-middle", primary_export: "services",
    fact: "Egypt's Nile River has supported continuous human civilization for over 5,000 years — the longest such record on Earth."
  },
  {
    name: "Nigeria", flag: "🇳🇬", continent: "Africa", region: "West Africa",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "tropical", major_mountain_range: false, major_river: true,
    population_tier: "huge", area_tier: "large", language_family: "Niger-Congo",
    government_type: "federal_republic", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "energy",
    fact: "Nigeria has the largest film industry in the world by volume of output — Nollywood produces thousands of films per year."
  },
  {
    name: "South Africa", flag: "🇿🇦", continent: "Africa", region: "Southern Africa",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mixed", major_mountain_range: false, major_river: false,
    population_tier: "large", area_tier: "large", language_family: "other",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: true, drives_left: true, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "minerals",
    fact: "South Africa has three capital cities — Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial)."
  },
  {
    name: "Ethiopia", flag: "🇪🇹", continent: "Africa", region: "East Africa",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "grassland", major_mountain_range: true, major_river: true,
    population_tier: "huge", area_tier: "large", language_family: "Semitic",
    government_type: "federal_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "low", primary_export: "agriculture",
    fact: "Ethiopia follows its own ancient calendar — it currently runs about 7–8 years behind the Gregorian calendar."
  },
  {
    name: "Kenya", flag: "🇰🇪", continent: "Africa", region: "East Africa",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "grassland", major_mountain_range: true, major_river: false,
    population_tier: "large", area_tier: "medium", language_family: "Niger-Congo",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "agriculture",
    fact: "Kenya is considered the birthplace of long-distance running — runners from the Rift Valley have won more Olympic medals than any other region."
  },
  {
    name: "Morocco", flag: "🇲🇦", continent: "Africa", region: "North Africa",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "desert", major_mountain_range: true, major_river: false,
    population_tier: "medium", area_tier: "medium", language_family: "Semitic",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "lower-middle", primary_export: "minerals",
    fact: "Morocco is the world's largest exporter of phosphate rock, a critical ingredient in fertilizer."
  },
  {
    name: "Tanzania", flag: "🇹🇿", continent: "Africa", region: "East Africa",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "grassland", major_mountain_range: true, major_river: false,
    population_tier: "large", area_tier: "large", language_family: "Niger-Congo",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "several",
    income_tier: "low", primary_export: "agriculture",
    fact: "Tanzania is home to Mount Kilimanjaro, Africa's highest peak, and the Serengeti, site of the world's largest animal migration."
  },
  {
    name: "Ghana", flag: "🇬🇭", continent: "Africa", region: "West Africa",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "tropical", major_mountain_range: false, major_river: true,
    population_tier: "medium", area_tier: "small", language_family: "Niger-Congo",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "lower-middle", primary_export: "minerals",
    fact: "Ghana was the first sub-Saharan African country to gain independence from colonial rule, in 1957."
  },
  {
    name: "Democratic Republic of Congo", flag: "🇨🇩", continent: "Africa", region: "Central Africa",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "tropical", major_mountain_range: false, major_river: true,
    population_tier: "huge", area_tier: "huge", language_family: "Niger-Congo",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "many",
    income_tier: "low", primary_export: "minerals",
    fact: "The Congo River is the world's deepest river and the only major river to cross the equator twice."
  },
  {
    name: "China", flag: "🇨🇳", continent: "Asia", region: "East Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mixed", major_mountain_range: true, major_river: true,
    population_tier: "huge", area_tier: "huge", language_family: "Sino-Tibetan",
    government_type: "other", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: true, drives_left: false, borders_count_tier: "many",
    income_tier: "upper-middle", primary_export: "manufacturing",
    fact: "China borders 14 different countries — more than any other country in the world."
  },
  {
    name: "India", flag: "🇮🇳", continent: "Asia", region: "South Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mixed", major_mountain_range: true, major_river: true,
    population_tier: "huge", area_tier: "large", language_family: "other",
    government_type: "federal_republic", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: true, drives_left: true, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "services",
    fact: "India is the world's largest democracy and home to more vegetarians than the rest of the world combined."
  },
  {
    name: "Japan", flag: "🇯🇵", continent: "Asia", region: "East Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: true,
    coastline: "long", dominant_biome: "forest", major_mountain_range: true, major_river: false,
    population_tier: "huge", area_tier: "medium", language_family: "other",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: true, drives_left: true, borders_count_tier: "none",
    income_tier: "high", primary_export: "manufacturing",
    fact: "Japan has around 110 active volcanoes — roughly 10% of the world's total — due to its position on the Pacific Ring of Fire."
  },
  {
    name: "South Korea", flag: "🇰🇷", continent: "Asia", region: "East Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "mixed", major_mountain_range: false, major_river: false,
    population_tier: "large", area_tier: "small", language_family: "other",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: true, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "manufacturing",
    fact: "South Korea went from one of the poorest countries on Earth in 1950 to a high-income economy in just two generations."
  },
  {
    name: "Indonesia", flag: "🇮🇩", continent: "Asia", region: "Southeast Asia",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: false, island_nation: true,
    coastline: "long", dominant_biome: "tropical", major_mountain_range: true, major_river: false,
    population_tier: "huge", area_tier: "large", language_family: "Austronesian",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: false, drives_left: true, borders_count_tier: "few",
    income_tier: "lower-middle", primary_export: "energy",
    fact: "Indonesia is the world's largest archipelago nation with over 17,000 islands, of which around 6,000 are inhabited."
  },
  {
    name: "Pakistan", flag: "🇵🇰", continent: "Asia", region: "South Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "desert", major_mountain_range: true, major_river: true,
    population_tier: "huge", area_tier: "large", language_family: "other",
    government_type: "federal_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: true, drives_left: true, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "manufacturing",
    fact: "Pakistan is home to K2, the world's second-highest mountain, which many climbers consider more technically challenging than Everest."
  },
  {
    name: "Bangladesh", flag: "🇧🇩", continent: "Asia", region: "South Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "tropical", major_mountain_range: false, major_river: true,
    population_tier: "huge", area_tier: "small", language_family: "other",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "few",
    income_tier: "lower-middle", primary_export: "manufacturing",
    fact: "Bangladesh is one of the most densely populated countries on Earth, with roughly the population of Russia in an area the size of Iowa."
  },
  {
    name: "Thailand", flag: "🇹🇭", continent: "Asia", region: "Southeast Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "tropical", major_mountain_range: false, major_river: true,
    population_tier: "large", area_tier: "medium", language_family: "other",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "manufacturing",
    fact: "Thailand is the only country in Southeast Asia that was never colonized by a European power."
  },
  {
    name: "Vietnam", flag: "🇻🇳", continent: "Asia", region: "Southeast Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "tropical", major_mountain_range: true, major_river: true,
    population_tier: "large", area_tier: "medium", language_family: "other",
    government_type: "other", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "lower-middle", primary_export: "manufacturing",
    fact: "Vietnam has transformed from one of the world's poorest countries in 1986 to a major manufacturing hub in just 35 years."
  },
  {
    name: "Philippines", flag: "🇵🇭", continent: "Asia", region: "Southeast Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: true,
    coastline: "long", dominant_biome: "tropical", major_mountain_range: true, major_river: false,
    population_tier: "huge", area_tier: "medium", language_family: "Austronesian",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "none",
    income_tier: "lower-middle", primary_export: "services",
    fact: "The Philippines is the world's largest exporter of nurses and seafarers — its diaspora sends home billions in remittances each year."
  },
  {
    name: "Malaysia", flag: "🇲🇾", continent: "Asia", region: "Southeast Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "tropical", major_mountain_range: false, major_river: false,
    population_tier: "medium", area_tier: "medium", language_family: "Austronesian",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "few",
    income_tier: "upper-middle", primary_export: "manufacturing",
    fact: "Malaysia is the only country in the world with territory on both the Asian mainland and on the island of Borneo."
  },
  {
    name: "Saudi Arabia", flag: "🇸🇦", continent: "Asia", region: "Middle East",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "desert", major_mountain_range: false, major_river: false,
    population_tier: "medium", area_tier: "large", language_family: "Semitic",
    government_type: "absolute_monarchy", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "high", primary_export: "energy",
    fact: "Saudi Arabia has no rivers — it is one of the largest countries in the world without a single permanent river."
  },
  {
    name: "Iran", flag: "🇮🇷", continent: "Asia", region: "Middle East",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "desert", major_mountain_range: true, major_river: false,
    population_tier: "large", area_tier: "large", language_family: "other",
    government_type: "other", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "energy",
    fact: "Iran is home to one of the world's oldest continuous civilizations, with a recorded history stretching back 5,000 years."
  },
  {
    name: "Iraq", flag: "🇮🇶", continent: "Asia", region: "Middle East",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "desert", major_mountain_range: false, major_river: true,
    population_tier: "medium", area_tier: "medium", language_family: "Semitic",
    government_type: "federal_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "energy",
    fact: "Iraq contains the site of ancient Mesopotamia, where writing, the wheel, and the first cities were all invented."
  },
  {
    name: "Israel", flag: "🇮🇱", continent: "Asia", region: "Middle East",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "desert", major_mountain_range: false, major_river: false,
    population_tier: "small", area_tier: "small", language_family: "Semitic",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: true, drives_left: false, borders_count_tier: "several",
    income_tier: "high", primary_export: "manufacturing",
    fact: "Israel has more tech startups per capita than any other country outside the United States, earning the nickname 'Startup Nation'."
  },
  {
    name: "United Arab Emirates", flag: "🇦🇪", continent: "Asia", region: "Middle East",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "desert", major_mountain_range: false, major_river: false,
    population_tier: "small", area_tier: "small", language_family: "Semitic",
    government_type: "other", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: true, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "energy",
    fact: "Dubai's Burj Khalifa is the world's tallest building, but over 85% of the UAE's population are foreign nationals."
  },
  {
    name: "Kazakhstan", flag: "🇰🇿", continent: "Asia", region: "Central Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "grassland", major_mountain_range: false, major_river: false,
    population_tier: "medium", area_tier: "huge", language_family: "other",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "energy",
    fact: "Kazakhstan is the world's largest landlocked country — it's bigger than all of Western Europe combined."
  },
  {
    name: "Mongolia", flag: "🇲🇳", continent: "Asia", region: "East Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "grassland", major_mountain_range: true, major_river: false,
    population_tier: "small", area_tier: "large", language_family: "other",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "lower-middle", primary_export: "minerals",
    fact: "Mongolia has the lowest population density of any country in the world — vast areas of the Gobi Desert have essentially no inhabitants."
  },
  {
    name: "Australia", flag: "🇦🇺", continent: "Oceania", region: "Oceania",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: false, island_nation: true,
    coastline: "long", dominant_biome: "desert", major_mountain_range: false, major_river: false,
    population_tier: "medium", area_tier: "huge", language_family: "Germanic",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: false, g20_member: true,
    nuclear_power: false, drives_left: true, borders_count_tier: "none",
    income_tier: "high", primary_export: "minerals",
    fact: "Australia is the only continent that is also a single country, and it hosts over 80% of its species found nowhere else on Earth."
  },
  {
    name: "New Zealand", flag: "🇳🇿", continent: "Oceania", region: "Oceania",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: false, island_nation: true,
    coastline: "long", dominant_biome: "mixed", major_mountain_range: true, major_river: false,
    population_tier: "small", area_tier: "small", language_family: "Germanic",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "none",
    income_tier: "high", primary_export: "agriculture",
    fact: "New Zealand was the first country in the world to give women the right to vote, in 1893."
  },
  {
    name: "Papua New Guinea", flag: "🇵🇬", continent: "Oceania", region: "Oceania",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: false, island_nation: true,
    coastline: "long", dominant_biome: "tropical", major_mountain_range: true, major_river: false,
    population_tier: "small", area_tier: "medium", language_family: "other",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "few",
    income_tier: "lower-middle", primary_export: "minerals",
    fact: "Papua New Guinea is the most linguistically diverse country on Earth, with over 800 distinct languages spoken."
  },
  {
    name: "Fiji", flag: "🇫🇯", continent: "Oceania", region: "Oceania",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: false, island_nation: true,
    coastline: "medium", dominant_biome: "tropical", major_mountain_range: false, major_river: false,
    population_tier: "micro", area_tier: "small", language_family: "Austronesian",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "none",
    income_tier: "upper-middle", primary_export: "services",
    fact: "Fiji is made up of 333 islands, though only about 110 of them are inhabited."
  },
  {
    name: "Nepal", flag: "🇳🇵", continent: "Asia", region: "South Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "mixed", major_mountain_range: true, major_river: true,
    population_tier: "medium", area_tier: "small", language_family: "other",
    government_type: "federal_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "few",
    income_tier: "low", primary_export: "services",
    fact: "Nepal contains eight of the world's ten highest mountains, including Everest — the roof of the world."
  },
  {
    name: "Sri Lanka", flag: "🇱🇰", continent: "Asia", region: "South Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: true,
    coastline: "long", dominant_biome: "tropical", major_mountain_range: false, major_river: false,
    population_tier: "medium", area_tier: "small", language_family: "other",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "none",
    income_tier: "lower-middle", primary_export: "agriculture",
    fact: "Sri Lanka is the world's oldest Buddhist country still practicing the religion, with an unbroken tradition stretching 2,300 years."
  },
  {
    name: "Myanmar", flag: "🇲🇲", continent: "Asia", region: "Southeast Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "tropical", major_mountain_range: true, major_river: true,
    population_tier: "large", area_tier: "large", language_family: "Sino-Tibetan",
    government_type: "other", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "agriculture",
    fact: "Myanmar has one of the world's largest teak forests and is a top producer of rubies and jade."
  },
  {
    name: "Cambodia", flag: "🇰🇭", continent: "Asia", region: "Southeast Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "tropical", major_mountain_range: false, major_river: true,
    population_tier: "medium", area_tier: "small", language_family: "other",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "lower-middle", primary_export: "manufacturing",
    fact: "Angkor Wat in Cambodia is the world's largest religious monument, covering nearly 400 acres."
  },
  {
    name: "Afghanistan", flag: "🇦🇫", continent: "Asia", region: "Central Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "desert", major_mountain_range: true, major_river: false,
    population_tier: "medium", area_tier: "medium", language_family: "other",
    government_type: "other", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "low", primary_export: "agriculture",
    fact: "Afghanistan sits at the crossroads of Central and South Asia — the ancient Silk Road ran through its heart."
  },
  {
    name: "Uzbekistan", flag: "🇺🇿", continent: "Asia", region: "Central Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "desert", major_mountain_range: false, major_river: false,
    population_tier: "medium", area_tier: "medium", language_family: "other",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "energy",
    fact: "Uzbekistan is one of only two doubly landlocked countries in the world — it is surrounded entirely by other landlocked countries."
  },
  {
    name: "Angola", flag: "🇦🇴", continent: "Africa", region: "Southern Africa",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "grassland", major_mountain_range: false, major_river: true,
    population_tier: "medium", area_tier: "large", language_family: "Niger-Congo",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "energy",
    fact: "Angola is Africa's second-largest oil producer and has one of the fastest-growing economies on the continent."
  },
  {
    name: "Sudan", flag: "🇸🇩", continent: "Africa", region: "North Africa",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "desert", major_mountain_range: false, major_river: true,
    population_tier: "large", area_tier: "large", language_family: "Semitic",
    government_type: "other", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "low", primary_export: "energy",
    fact: "Sudan has more ancient pyramids than Egypt — over 200 Nubian pyramids dot its northern deserts."
  },
  {
    name: "Algeria", flag: "🇩🇿", continent: "Africa", region: "North Africa",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "desert", major_mountain_range: true, major_river: false,
    population_tier: "large", area_tier: "huge", language_family: "Semitic",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "many",
    income_tier: "upper-middle", primary_export: "energy",
    fact: "Algeria is the largest country in Africa and the Arab world — over 80% of its territory is covered by the Sahara Desert."
  },
  {
    name: "Mozambique", flag: "🇲🇿", continent: "Africa", region: "East Africa",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "tropical", major_mountain_range: false, major_river: true,
    population_tier: "medium", area_tier: "large", language_family: "Niger-Congo",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "several",
    income_tier: "low", primary_export: "energy",
    fact: "Mozambique's flag is the only national flag in the world to feature a modern weapon — an AK-47 rifle."
  },
  {
    name: "Cameroon", flag: "🇨🇲", continent: "Africa", region: "Central Africa",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "tropical", major_mountain_range: true, major_river: false,
    population_tier: "medium", area_tier: "medium", language_family: "Niger-Congo",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "energy",
    fact: "Cameroon is nicknamed 'Africa in miniature' because it contains nearly every major landscape found across the continent."
  },
  {
    name: "Senegal", flag: "🇸🇳", continent: "Africa", region: "West Africa",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "grassland", major_mountain_range: false, major_river: true,
    population_tier: "medium", area_tier: "small", language_family: "Niger-Congo",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "services",
    fact: "Senegal has never experienced a coup or civil war since independence — a rare record of democratic stability in West Africa."
  },
  {
    name: "Ivory Coast", flag: "🇨🇮", continent: "Africa", region: "West Africa",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "tropical", major_mountain_range: false, major_river: false,
    population_tier: "medium", area_tier: "small", language_family: "Niger-Congo",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "agriculture",
    fact: "Ivory Coast produces about 40% of the world's cocoa — your chocolate bar almost certainly passed through the country."
  },
  {
    name: "Madagascar", flag: "🇲🇬", continent: "Africa", region: "East Africa",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: false, island_nation: true,
    coastline: "long", dominant_biome: "tropical", major_mountain_range: true, major_river: false,
    population_tier: "medium", area_tier: "large", language_family: "Austronesian",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "none",
    income_tier: "low", primary_export: "agriculture",
    fact: "Around 90% of Madagascar's wildlife is found nowhere else on Earth — it is one of the world's greatest biodiversity hotspots."
  },
  {
    name: "Zimbabwe", flag: "🇿🇼", continent: "Africa", region: "Southern Africa",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "grassland", major_mountain_range: false, major_river: true,
    population_tier: "medium", area_tier: "medium", language_family: "Niger-Congo",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "several",
    income_tier: "low", primary_export: "agriculture",
    fact: "Zimbabwe's Victoria Falls is one of the world's largest waterfalls — local people call it 'the smoke that thunders'."
  },
  {
    name: "Iceland", flag: "🇮🇸", continent: "Europe", region: "Northern Europe",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: true,
    coastline: "long", dominant_biome: "tundra", major_mountain_range: false, major_river: false,
    population_tier: "micro", area_tier: "small", language_family: "Germanic",
    government_type: "unitary_republic", eu_member: false, nato_member: true, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "none",
    income_tier: "high", primary_export: "energy",
    fact: "Iceland runs almost entirely on renewable energy — geothermal and hydropower supply around 99% of its electricity."
  },
  {
    name: "Ireland", flag: "🇮🇪", continent: "Europe", region: "Western Europe",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: true,
    coastline: "long", dominant_biome: "mixed", major_mountain_range: false, major_river: false,
    population_tier: "small", area_tier: "small", language_family: "Germanic",
    government_type: "unitary_republic", eu_member: true, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "few",
    income_tier: "high", primary_export: "services",
    fact: "Ireland is one of the few countries to have seen its population decline over the last 170 years due to famine and emigration."
  },
  {
    name: "Czech Republic", flag: "🇨🇿", continent: "Europe", region: "Eastern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "mixed", major_mountain_range: false, major_river: true,
    population_tier: "small", area_tier: "small", language_family: "Slavic",
    government_type: "unitary_republic", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: true, drives_left: false, borders_count_tier: "several",
    income_tier: "high", primary_export: "manufacturing",
    fact: "Czech Republic drinks more beer per person than any other country in the world — a tradition stretching back centuries."
  },
  {
    name: "Hungary", flag: "🇭🇺", continent: "Europe", region: "Eastern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "grassland", major_mountain_range: false, major_river: true,
    population_tier: "small", area_tier: "small", language_family: "other",
    government_type: "unitary_republic", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: true, drives_left: false, borders_count_tier: "several",
    income_tier: "high", primary_export: "manufacturing",
    fact: "Hungarian (Magyar) is one of the most linguistically isolated languages in Europe — it's related to Finnish but not to any neighboring language."
  },
  {
    name: "Serbia", flag: "🇷🇸", continent: "Europe", region: "Eastern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "mixed", major_mountain_range: false, major_river: true,
    population_tier: "small", area_tier: "small", language_family: "Slavic",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "manufacturing",
    fact: "Nikola Tesla, one of the greatest inventors in history, was born in a small Serbian village in 1856."
  },
  {
    name: "Croatia", flag: "🇭🇷", continent: "Europe", region: "Southern Europe",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "long", dominant_biome: "mediterranean", major_mountain_range: false, major_river: false,
    population_tier: "small", area_tier: "small", language_family: "Slavic",
    government_type: "unitary_republic", eu_member: true, nato_member: true, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "high", primary_export: "services",
    fact: "The necktie — worn by businesspeople worldwide — was invented in Croatia and named after Croatian mercenaries ('Croats')."
  },
  {
    name: "Jordan", flag: "🇯🇴", continent: "Asia", region: "Middle East",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "desert", major_mountain_range: false, major_river: false,
    population_tier: "small", area_tier: "small", language_family: "Semitic",
    government_type: "constitutional_monarchy", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "services",
    fact: "Petra, carved into rose-red cliffs around 300 BC, is Jordan's treasury — and was entirely unknown to the Western world until 1812."
  },
  {
    name: "Lebanon", flag: "🇱🇧", continent: "Asia", region: "Middle East",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "mediterranean", major_mountain_range: true, major_river: false,
    population_tier: "small", area_tier: "small", language_family: "Semitic",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "upper-middle", primary_export: "services",
    fact: "Lebanon has more banks per square kilometre than almost any other country — Beirut was once called the Paris of the Middle East."
  },
  {
    name: "Zambia", flag: "🇿🇲", continent: "Africa", region: "Southern Africa",
    hemisphere_ns: "south", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "grassland", major_mountain_range: false, major_river: true,
    population_tier: "medium", area_tier: "large", language_family: "Niger-Congo",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: true, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "minerals",
    fact: "Zambia produces around 70% of the world's high-quality emeralds, making it one of the top gemstone producers globally."
  },
  {
    name: "Ecuador", flag: "🇪🇨", continent: "South America", region: "South America",
    hemisphere_ns: "south", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "tropical", major_mountain_range: true, major_river: true,
    population_tier: "medium", area_tier: "medium", language_family: "Romance",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "upper-middle", primary_export: "energy",
    fact: "Ecuador sits directly on the equator — its name literally means 'the equator' in Spanish."
  },
  {
    name: "Paraguay", flag: "🇵🇾", continent: "South America", region: "South America",
    hemisphere_ns: "south", hemisphere_ew: "west", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "grassland", major_mountain_range: false, major_river: true,
    population_tier: "small", area_tier: "medium", language_family: "Romance",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "upper-middle", primary_export: "energy",
    fact: "Paraguay's Itaipu Dam is the world's largest hydroelectric power plant by energy generation — it powers the entire country and exports the surplus."
  },
  {
    name: "Uruguay", flag: "🇺🇾", continent: "South America", region: "South America",
    hemisphere_ns: "south", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "grassland", major_mountain_range: false, major_river: true,
    population_tier: "small", area_tier: "small", language_family: "Romance",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "few",
    income_tier: "high", primary_export: "agriculture",
    fact: "Uruguay was the first country in the world to fully legalize cannabis at the national level, in 2013."
  },
  {
    name: "Guatemala", flag: "🇬🇹", continent: "North America", region: "Central America & Caribbean",
    hemisphere_ns: "north", hemisphere_ew: "west", landlocked: false, island_nation: false,
    coastline: "short", dominant_biome: "tropical", major_mountain_range: true, major_river: false,
    population_tier: "medium", area_tier: "small", language_family: "Romance",
    government_type: "unitary_republic", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "upper-middle", primary_export: "agriculture",
    fact: "Guatemala's ancient Maya city of Tikal was one of the largest in the ancient world — its towers peek above the rainforest canopy."
  },
  {
    name: "Laos", flag: "🇱🇦", continent: "Asia", region: "Southeast Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: true, island_nation: false,
    coastline: "none", dominant_biome: "tropical", major_mountain_range: true, major_river: true,
    population_tier: "small", area_tier: "small", language_family: "other",
    government_type: "other", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: false, drives_left: false, borders_count_tier: "several",
    income_tier: "lower-middle", primary_export: "energy",
    fact: "Laos is the most heavily bombed country per capita in history — the US dropped more bombs on it during the Vietnam War than on Germany in WWII."
  },
  {
    name: "North Korea", flag: "🇰🇵", continent: "Asia", region: "East Asia",
    hemisphere_ns: "north", hemisphere_ew: "east", landlocked: false, island_nation: false,
    coastline: "medium", dominant_biome: "mixed", major_mountain_range: true, major_river: false,
    population_tier: "medium", area_tier: "small", language_family: "other",
    government_type: "other", eu_member: false, nato_member: false, g20_member: false,
    nuclear_power: true, drives_left: false, borders_count_tier: "few",
    income_tier: "low", primary_export: "minerals",
    fact: "North Korea operates its own time zone, 'Pyongyang Time', set 30 minutes behind South Korea and Japan."
  }
];
