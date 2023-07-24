import "./App.css";
import Board from "./components/board.js";
import Keyboard from "./components/Keyboard.js";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Wordle Infinity</h1>
      </nav>
      {/* board is above keyboard in the ui */}
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
