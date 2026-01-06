function TradeAmount({ amount, setAmount, cash, invested, actionType }) {
  const maxValue = actionType === "buy" ? cash : invested;

  return (
    <div className="w-full max-w-2xl px-2">
      <div className="flex flex-col gap-3 md:gap-4">
        <label className="text-base md:text-xl font-semibold text-gray-300 text-center">
          Enter Amount
        </label>

        <div className="relative">
          <div className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-gray-400 text-lg md:text-2xl font-bold pointer-events-none z-10">
            $
          </div>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full pl-8 md:pl-14 pr-4 md:pr-6 py-4 md:py-6 rounded-2xl text-lg md:text-2xl font-bold bg-white/10 backdrop-blur-sm text-white placeholder-gray-500 focus:outline-none transition-all relative"
          />
        </div>

        <button
          type="button"
          onClick={() => setAmount(maxValue.toString())}
          className="self-end text-sm md:text-lg text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
        >
          Max: ${maxValue.toFixed(2)}
        </button>
      </div>
    </div>
  );
}

export default TradeAmount;
