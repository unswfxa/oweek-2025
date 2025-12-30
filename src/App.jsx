import { useState } from "react";
import TradeActions from "./TradeActions";
import TradePrompt from "./TradePrompt";
import Portfolio from "./Portfolio";

function App() {
  const [cash, setCash] = useState(20000);
  const [prompt, setPrompt] = useState("AUD/USD rises after strong jobs data");

  const handleBuy = () => {
    console.log("Buy clicked");
    setCash((prev) => prev + 500);
  };

  const handleSell = () => {
    console.log("SELL clicked");
    setCash((prev) => prev - 500);
  };

  const handleHold = () => {
    console.log("HOLD clicked");
  }

return (
  <div className="w-screen flex flex-col">
    <div className="flex flex-col justify-center items-center gap-12 m-16">
      <h1 className="text-center">Trading Stocks</h1>

      <p className="text-xl text-center">
        You’ll be given a series of real-world news events from around the globe. You must decide whether to buy,
        sell, or hold. Every decision affects your balance — some will pay off, others won’t. After all prompts, your
        final balance determines your prize.
      </p>

      <div className="flex flex-col items-center gap-8 mt-8">
        <Portfolio cash={cash} />
        <TradePrompt prompt={prompt} />
        <TradeActions
          onBuy={handleBuy}
          onSell={handleSell}
          onHold={handleHold}
        />
      </div>

      <p className="text-xl text-center">
        Think fast, trade smart, and maximise your gains 💸
      </p>
    </div>
  </div>
);
}

export default App;
