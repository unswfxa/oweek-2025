function TradeActions({ onBuy, onSell, onHold }) {
  return (
    <div className="flex gap-4 justify-center">
      <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={onBuy}>
        Buy
      </button>
      <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onSell}>
        Sell
      </button>
      <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={onHold}>
        Hold
      </button>
    </div>
  );
}

export default TradeActions;
