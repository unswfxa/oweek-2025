function Portfolio({ cash, invested }) {
  return (
    <div className="flex gap-8 text-lg font-medium">
      <div>Cash: ${cash.toFixed(2)}</div>
      <div>Invested: ${invested.toFixed(2)}</div>
    </div>
  );
}

export default Portfolio;
