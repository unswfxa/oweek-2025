function TradePrompt({ prompt }) {
  return (
    <div className="w-full max-w-2xl px-2">
      <div className="relative bg-linear-to-br from-white via-gray-50 to-gray-100 text-gray-900 p-4 md:p-8 rounded-2xl shadow-2xl border-2 border-cyan-400/30">
        <div className="flex-1">
          <h3 className="text-sm md:text-xl font-semibold text-cyan-600 mb-2">BREAKING NEWS</h3>
          <p className="text-base md:text-2xl font-bold text-gray-900 leading-relaxed">{prompt}</p>
        </div>
      </div>
    </div>
  );
}

export default TradePrompt;