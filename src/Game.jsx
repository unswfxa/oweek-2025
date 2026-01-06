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

function Game({ goBack }) {
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
    <div className="w-screen min-h-screen bg-zinc-900 text-white relative overflow-hidden">

      {/* Back Button */}
      <div className="absolute top-6 left-8 z-20">
        <button
          onClick={goBack}
          className="flex items-center gap-2 px-4 py-2 text-white/80 bg-white/10 rounded-lg"
        >
          <span className="font-semibold text-base md:text-xl">Back</span>
        </button>
      </div>

      <div className="absolute top-6 right-8 z-10">
        <img src={logo} alt="FXA Logo" className="h-12 w-auto" />
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-8 mx-auto max-w-4xl pt-24 pb-6 md:py-12 px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Trading AUD/USD
          </h1>
          <p className="mt-5 text-xl md:text-2xl font-semibold text-cyan-400">
            Round {Math.min(promptIndex + 1, TOTAL_ROUNDS)} / {TOTAL_ROUNDS}
          </p>
        </div>

        <Portfolio cash={cash} invested={invested} />

        {gameOver && (
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 md:mt-4">Game Over</h2>
        )}

        {showMarketMove ? (
          <div className="w-full max-w-2xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Market Move Result</h3>
              <div className={`text-5xl font-bold mb-4 ${lastEffect >= 0 ? "text-green-400" : "text-red-400"}`}>
                {lastEffect >= 0 ? "+" : ""}{lastEffect.toFixed(2)}%
              </div>
              <p className="text-gray-400">Next round starting soon...</p>
            </div>
          </div>
        ) : (
          !gameOver && <TradePrompt prompt={currentPrompt?.text} />
        )}

        {!showMarketMove && !gameOver && (
          <>
            <TradeAmount amount={amount} setAmount={setAmount} cash={cash} invested={invested} actionType="buy" />

            <TradeActions onBuy={handleBuy} onSell={handleSell} onHold={handleHold} />
          </>
        )}

        {gameOver && (
          <div className="w-full max-w-2xl mt-6">
            <div>
              <div className="space-y-6">
                {/* Final Balance */}
                <div className="text-center">
                  <p className="text-lg text-gray-400 uppercase tracking-wide mb-2">Final Balance</p>
                  <p className="text-4xl font-bold text-white">
                    ${(cash + invested).toFixed(2)}
                  </p>
                </div>

                {/* Profit/Loss */}
                <div className="text-center">
                  {(() => {
                    const finalBalance = cash + invested;
                    const isProfit = finalBalance > 20000;
                    const diff = Math.abs(finalBalance - 20000);
                    const percentChange = ((diff / 20000) * 100).toFixed(2);

                    return (
                      <div className={`p-6 rounded-xl ${isProfit ? "bg-green-500/10 border border-green-500/30" : "bg-red-500/10 border border-red-500/30"}`}>
                        <p className={`text-3xl font-bold ${isProfit ? "text-green-400" : "text-red-400"}`}>
                          {isProfit ? "+" : "-"}${diff.toFixed(2)}
                        </p>
                        <p className={`text-2xl font-semibold ${isProfit ? "text-green-300" : "text-red-300"}`}>
                          {isProfit ? "Profit" : "Loss"}: {percentChange}%
                        </p>
                      </div>
                    );
                  })()}
                </div>

                {/* Play Again Button */}
                <div className="text-center mt-8">
                  <button
                    onClick={goBack}
                    className="px-8 py-4 text-xl font-bold text-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: "linear-gradient(135deg, #56CDD3 0%, #3596E3 100%)",
                    }}
                  >
                    Play Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
