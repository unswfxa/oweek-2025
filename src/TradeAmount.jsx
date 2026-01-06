function TradeAmount({ amount, setAmount, cash, invested, actionType }) {
  const maxValue = actionType === "buy" ? cash : invested;
  const numericAmount = Number(amount);

  const isInvalid =
    amount !== "" && (numericAmount <= 0 || numericAmount > maxValue);

  return (
    <div className="flex flex-col items-center gap-2">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className={`
          w-64 px-4 py-2 rounded border
          bg-white text-black
          focus:outline-none focus:ring-2
          ${
            isInvalid
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-500"
          }
        `}
      />

      {isInvalid && (
        <p className="text-sm text-red-400">
          Enter a valid amount
        </p>
      )}
    </div>
  );
}

export default TradeAmount;
