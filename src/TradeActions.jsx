function TradeActions({ onBuy, onSell, onHold }) {
  return (
    <div className="w-full max-w-2xl px-2">
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <button
          onClick={onBuy}
          className="px-4 md:px-6 py-3 md:py-4 bg-green-600 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <span className="text-xl md:text-3xl">Buy $20</span>
        </button>

        <button
          onClick={onSell}
          className="px-4 md:px-6 py-3 md:py-4 bg-red-600 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <span className="text-xl md:text-3xl">Sell $20</span>
        </button>

        <button
          onClick={onHold}
          className="px-4 md:px-6 py-3 md:py-4 bg-gray-600 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <span className="text-xl md:text-3xl">Hold</span>
        </button>
      </div>
    </div>
  );
}

export default TradeActions;
