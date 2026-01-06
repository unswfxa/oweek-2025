import { useState } from "react";
import Landing from "./Landing";
import Game from "./Game";

function App() {
  const [start, setStart] = useState(false);

  return start == false ? <Landing startGame={() => setStart(true)} /> : <Game goBack={() => setStart(false)} />;
}

export default App;
