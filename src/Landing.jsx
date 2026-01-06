function Landing({ startGame }) {
  return (
    <>
      <div className="w-screen min-h-screen justify-center flex flex-col bg-zinc-900 text-white">
        <div className="flex flex-col justify-center items-center gap-12 m-16">
          <h1 className="text-center">Trading Stocks</h1>
          <p className="text-xl text-center">
            You’ll be given a series of real-world news events from around the globe. You must decide whether to buy,
            sell, or hold. Every decision affects your balance — some will pay off, others won’t. After all prompts,
            your final balance determines your prize.
          </p>
          <div className="text-xl flex flex-col justify-center items-center gap-6">
            <p className="text-2xl text-center">
              Starting Balance: <b>$20,000</b>
            </p>
            <button
              style={{
                background: "linear-gradient(135deg, #56CDD3 0%, #3596E3 100%)",
                color: "white",
              }}
              onClick={startGame}
            >
              <b>Start Trading</b>
            </button>
          </div>
          <p className="text-xl text-center">Think fast, trade smart, and maximise your gains 💸</p>
        </div>
      </div>
    </>
  );
}

export default Landing;
