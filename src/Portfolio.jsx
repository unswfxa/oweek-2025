function Portfolio({ cash, invested }) {
  const total = cash + invested;

  return (
    <div className="w-full max-w-2xl px-2">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 shadow-xl">
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {/* Cash */}
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">Cash (USD)</span>
            <span className="text-base md:text-2xl font-bold text-green-400">${cash.toFixed(2)}</span>
          </div>

          {/* Invested */}
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">AUD Exposure (USD)</span>
            <span className="text-base md:text-2xl font-bold text-cyan-400">${invested.toFixed(2)}</span>
          </div>

          {/* Total */}
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">Total (USD)</span>
            <span className="text-base md:text-2xl font-bold text-white">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
