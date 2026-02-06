const prompts = [
  { text: "US prices are rising faster than expected", min: -6, max: -3 },
  { text: "The US central bank says interest rates will stay high for longer", min: -7, max: -4 },
  { text: "The US added way more jobs than expected", min: -5, max: -2 },
  { text: "Investors are nervous and moving money into the US dollar", min: -6, max: -3 },
  { text: "US government bond interest rates jump sharply", min: -5, max: -2 },
  { text: "Americans are spending much more than expected", min: -5, max: -2 },
  { text: "US consumers feel very confident about the economy", min: -3, max: 0 },

  { text: "Australia’s central bank raises interest rates more than expected", min: 5, max: 8 },
  { text: "Australia’s central bank suggests rates may rise again", min: 3, max: 6 },
  { text: "Australian prices are rising faster than expected", min: 4, max: 7 },
  { text: "Australia adds more jobs than expected", min: 3, max: 6 },
  { text: "Australia’s central bank sounds tougher on inflation", min: 2, max: 5 },
  { text: "Australian businesses are more confident than they’ve been in years", min: 3, max: 6 },

  { text: "China plans to spend big on roads, buildings, and projects", min: 4, max: 8 },
  { text: "China’s factories produce more than expected", min: 3, max: 6 },
  { text: "China’s economy looks stronger, helping raw material prices", min: 3, max: 6 },
  { text: "China takes steps to stop its housing market from falling", min: 2, max: 5 },
  { text: "China buys more from Australia than it sells back", min: 2, max: 5 },

  { text: "Copper prices rise because supply problems limit production", min: 3, max: 6 },
  { text: "Iron ore prices jump because demand is strong", min: 4, max: 7 },
  { text: "Gold prices rise, but Australian gold companies lag behind", min: -1, max: 2 },
  { text: "Raw material prices rise as people feel better about global growth", min: 3, max: 6 },

  { text: "Worries about China hurt currencies linked to raw materials", min: -6, max: -3 },
  { text: "Iron ore prices fall because China is buying less", min: -7, max: -4 },
  { text: "Australia sells less overseas than expected", min: -5, max: -2 },

  { text: "Fear of a global slowdown pushes money into the US dollar", min: -7, max: -4 },
  { text: "Share markets fall and investors avoid risk", min: -6, max: -3 },
  { text: "Global conflicts push investors into safer assets", min: -5, max: -2 },

  { text: "The US central bank suggests interest rates may be cut", min: 3, max: 6 },
  { text: "US price growth is slowing down", min: 4, max: 7 },
  { text: "US economic numbers are generally worse than expected", min: 3, max: 6 },

  { text: "Australia’s central bank worries the economy is slowing", min: -5, max: -2 },
  { text: "Australia’s economy grows less than expected", min: -6, max: -3 },

  { text: "Investors take more risk, helping currencies like the AUD", min: 2, max: 5 },
  { text: "A stronger global economy increases demand for the Aussie dollar", min: 3, max: 6 },
  { text: "The US and China reduce trade conflicts", min: 2, max: 5 },

  { text: "Chinese factory profits fall sharply", min: -6, max: -3 },
  { text: "A Chinese AI company’s shares double on its first trading day", min: 3, max: 6 },
  { text: "South Korea’s exports jump thanks to strong chip demand", min: 2, max: 5 },
  { text: "Silver prices jump to a new record", min: 2, max: 5 },
  { text: "Oil prices rise due to shipping risks in the Middle East", min: 2, max: 5 },
  { text: "Russia limits fuel exports, causing oil prices to rise", min: 2, max: 5 },
  { text: "A mining company produces more copper than ever before", min: 1, max: 4 },
  { text: "Factories in Europe and Asia are producing less", min: -5, max: -2 },

  { text: "The US central bank raises rates to fight rising prices", min: -7, max: -4 },
];

export default prompts;