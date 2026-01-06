import { useState, useEffect } from "react";
import TradeActions from "./TradeActions";
import TradePrompt from "./TradePrompt";
import Portfolio from "./Portfolio";
import TradeAmount from "./TradeAmount";
import prompts from "./data/prompts";
import logo from "./assets/logo.png";

const TOTAL_ROUNDS = 6;

const getRandomPrompts = (allPrompts, count = TOTAL_ROUNDS) => {
  const shuffled = [...allPrompts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const getRandomPercent = (min, max) => {
  return Math.random() * (max - min) + min;
};

function Game() {
  const [cash, setCash] = useState(20000);
  const [invested, setInvested] = useState(0);
  const [amount, setAmount] = useState("");
  const [gamePrompts] = useState(() => getRandomPrompts(prompts));
  const [promptIndex, setPromptIndex] = useState(0);
  const [lastEffect, setLastEffect] = useState(null);
  const [showMarketMove, setShowMarketMove] = useState(false);
  const [pendingMarketMove, setPendingMarketMove] = useState(false);

  const gameOver = promptIndex >= TOTAL_ROUNDS;
  const currentPrompt = gamePrompts[promptIndex];

  useEffect(() => {
    if (pendingMarketMove && invested > 0 && currentPrompt) {
      const percent = getRandomPercent(currentPrompt.min, currentPrompt.max);
      setInvested((prev) => prev * (1 + percent / 100));
      setLastEffect(percent);
      setShowMarketMove(true);
      setPendingMarketMove(false);
    }
  }, [pendingMarketMove, invested, currentPrompt]);

  const advanceToNextRound = () => {
    setPromptIndex((prev) => prev + 1);
    setAmount("");
    setShowMarketMove(false);
  };

  const handleTradeAction = () => {
    setPendingMarketMove(true);
  };

  useEffect(() => {
    if (showMarketMove) {
      const timer = setTimeout(() => advanceToNextRound(), 2000);
      return () => clearTimeout(timer);
    }
  }, [showMarketMove]);

  const handleBuy = () => {
    const value = Number(amount);
    if (value <= 0 || value > cash) return;

    setCash((prev) => prev - value);
    setInvested((prev) => prev + value);
    handleTradeAction();
  };

  const handleSell = () => {
    const value = Number(amount);
    if (value <= 0 || value > invested) return;

    setInvested((prev) => prev - value);
    setCash((prev) => prev + value);
    handleTradeAction();
  };

  const handleHold = () => {
    handleTradeAction();
  };

  return (
    <div className="w-screen min-h-screen bg-zinc-900 text-white relative">
      <div className="absolute top-6 right-8">
        <img src={logo} alt="FXA Logo" className="h-10 w-auto" />
      </div>

      <div className="flex flex-col items-center gap-8 mx-auto max-w-4xl py-16">
        <h1 className="text-4xl font-bold">Trading AUD/USD</h1>

        <p className="text-lg">
          Round {Math.min(promptIndex + 1, TOTAL_ROUNDS)} / {TOTAL_ROUNDS}
        </p>

        <Portfolio cash={cash} invested={invested} />

        {showMarketMove ? (
          <div className="text-center">
            <p className="text-xl mb-2">Market Move Result:</p>
            <p className={`text-2xl font-bold ${lastEffect >= 0 ? "text-green-400" : "text-red-400"}`}>
              Market moved {lastEffect.toFixed(2)}%
            </p>
            <p className="mt-4">Next round starting soon...</p>
          </div>
        ) : (
          <TradePrompt prompt={gameOver ? "Game Over" : currentPrompt?.text} />
        )}

        {!showMarketMove && !gameOver && (
          <>
            <TradeAmount amount={amount} setAmount={setAmount} cash={cash} invested={invested} actionType="buy" />

            <TradeActions onBuy={handleBuy} onSell={handleSell} onHold={handleHold} />
          </>
        )}

        {gameOver && (
          <>
            <div className="text-2xl font-bold mt-4">Final Balance: ${(cash + invested).toFixed(2)}</div>
            <div className="text-xl font-bold mt-4">
              You have made a {(cash + invested).toFixed(2) > 20000 ? "profit" : "loss"} of $
              {(cash + invested).toFixed(2) > 20000
                ? ((cash + invested).toFixed(2) - 20000).toFixed(2)
                : (20000 - (cash + invested).toFixed(2)).toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Game;
