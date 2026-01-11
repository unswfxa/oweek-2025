const prompts = [
  { text: "US inflation comes in hotter than expected", min: -6, max: -3 },
  { text: "Federal Reserve signals higher-for-longer rates", min: -7, max: -4 },
  { text: "US Non-Farm Payrolls smash expectations", min: -5, max: -2 },
  { text: "Risk-off sentiment boosts US dollar demand", min: -6, max: -3 },
  { text: "US bond yields surge sharply", min: -5, max: -2 },
  { text: "US retail sales data significantly exceed forecasts", min: -5, max: -2 },
  { text: "Strong US consumer confidence data released", min: -3, max: 0 },

  { text: "RBA surprises markets with larger-than-expected rate hike", min: 5, max: 8 },
  { text: "RBA hints at future interest rate hikes", min: 3, max: 6 },
  { text: "Australian inflation surprises to the upside", min: 4, max: 7 },
  { text: "Strong Australian employment data released", min: 3, max: 6 },
  { text: "RBA adopts more hawkish tone in statement", min: 2, max: 5 },
  { text: "Australian business confidence reaches multi-year high", min: 3, max: 6 },

  { text: "China announces major infrastructure stimulus", min: 4, max: 8 },
  { text: "Chinese industrial output beats forecasts", min: 3, max: 6 },
  { text: "Improving China economic outlook boosts commodities", min: 3, max: 6 },
  { text: "China property market stabilization measures announced", min: 2, max: 5 },
  { text: "China's trade surplus with Australia expands", min: 2, max: 5 },

  { text: "Copper prices hit 3-month high on supply disruptions", min: 3, max: 6 },
  { text: "Iron ore prices rally on strong demand", min: 4, max: 7 },
  { text: "Gold prices rally but AUD gold miners underperform", min: -1, max: 2 },
  { text: "Commodity prices surge amid global growth optimism", min: 3, max: 6 },

  { text: "China growth concerns weigh on commodity currencies", min: -6, max: -3 },
  { text: "Iron ore prices tumble on weak Chinese demand", min: -7, max: -4 },
  { text: "Australian trade balance disappoints markets", min: -5, max: -2 },

  { text: "Global recession fears drive investors into USD", min: -7, max: -4 },
  { text: "Equity markets sell off sharply, risk appetite falls", min: -6, max: -3 },
  { text: "Geopolitical tensions trigger safe-haven flows", min: -5, max: -2 },

  { text: "Federal Reserve hints at potential rate cuts", min: 3, max: 6 },
  { text: "US inflation shows clear signs of cooling", min: 4, max: 7 },
  { text: "US economic data weakens broadly", min: 3, max: 6 },

  { text: "RBA signals concern over slowing Australian economy", min: -5, max: -2 },
  { text: "Australian GDP growth misses expectations", min: -6, max: -3 },

  { text: "Global risk-on sentiment lifts high-beta currencies", min: 2, max: 5 },
  { text: "Improved global growth outlook supports AUD demand", min: 3, max: 6 },
  { text: "US-China trade tensions ease", min: 2, max: 5 },


  { text: "China's industrial profits tumble at fastest pace in over a year", min: -6, max: -3 },
  { text: "China AI chipmaker Biren soars over 100% on Hong Kong debut", min: 3, max: 6 },
  { text: "South Korea's exports surge past $700bn on chip boom", min: 2, max: 5 },
  { text: "Silver rises 9% to hit fresh record high", min: 2, max: 5 },
  { text: "Global oil prices rise amid Middle East shipping concerns", min: 2, max: 5 },
  { text: "Russia's fuel export ban pushes oil prices higher", min: 2, max: 5 },
  { text: "Ero Copper reports record copper output in Q3", min: 1, max: 4 },

  { text: "Global manufacturing slumps across Europe and Asia", min: -5, max: -2 },
  { text: "Italy's economy caught in a prolonged downturn", min: -3, max: 0 },
  { text: "Infra spending expected to anchor India's push among top economies", min: 2, max: 5 },

  { text: "Fed hikes interest rates, signals aggressive fight to curb inflation", min: -7, max: -4 },
  { text: "High energy costs threaten UK manufacturing's future", min: -1, max: 2 },
  { text: "Power outages would push food prices higher", min: 1, max: 4 },

  { text: "Big tech may be breaking bank but AI investors love it", min: 2, max: 5 },
  { text: "Crypto and private credit hit mainstream, increasing perceived risk", min: -3, max: 0 },
  { text: "Investment and expansion of AI", min: 2, max: 5 },
];

export default prompts;