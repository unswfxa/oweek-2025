import logo from "./assets/logo.png";

function Landing({ startGame }) {
  return (
    <>
      <div className="w-screen min-h-screen flex items-center justify-center bg-zinc-900 text-white relative overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-6 md:gap-10 p-4 md:p-8 md:pt-8 relative z-10 max-w-4xl w-full">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={logo} alt="FXA Logo" className="h-40 w-auto" />
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-xl  font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              FXA's Trading Stocks Game
            </h1>
          </div>

          <p className="text-sm md:text-xl text-center leading-relaxed text-gray-200 px-4">
            You'll be given a series of real-world news events from around the globe. You must decide whether to buy, sell, or hold. Every decision affects your balance — some will pay off, others won't. After all prompts, your final balance determines your prize.
          </p>

          <div className="flex flex-col justify-center items-center gap-4 md:gap-8">
              <p className="my-2 md:my-4 text-xl md:text-3xl text-center">
                Starting Balance: <span className="font-bold text-cyan-400"> $20,000</span>
              </p>

            <button
              className="w-64 md:w-80 h-16 md:h-20 px-8 md:px-16 py-4 md:py-6 rounded-full font-bold text-white overflow-hidden transition-all hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #56CDD3 0%, #3596E3 100%)",
              }}
              onClick={startGame}
            >
              <span className="text-2xl md:text-3xl">Start Trading</span>
            </button>
          </div>

          <p className="text-base md:text-xl text-center text-gray-300 font-medium">
            Think fast, trade smart, and maximise your gains 💸
          </p>
        </div>
      </div>
    </>
  );
}

export default Landing;
