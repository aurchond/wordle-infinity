import "./App.css";
import Board from "./components/Board.js";
import Keyboard from "./components/Keyboard.js";
import { boardDefault } from "./Words";
import { createContext, useState } from "react"; // for context api - so that we don't have to
// pass the board as a prop for each Letter call
// define states on the app level and be able to access them anywhere in the project

export const AppContext = createContext();

function App() {
  // state: board is the value (state variable) and setBoard is the function to update this state
  const [boardState, setBoardState] = useState(boardDefault);

  // state: keep track of the coordinate position within the matrix
  const [currAttemptState, setCurrAttemptState] = useState({
    coordXLetter: 0,
    coordYAttempt: 0,
  });

  const onSelectLetter = () => {};

  const onDelete = () => {};

  const onEnter = () => {};

  return (
    // reminder: className formats according to the related css in App.css
    <div className="App">
      <nav>
        <h1>Wordle Infinity</h1>
      </nav>
      {/* board is above keyboard in the ui */}

      {/* AppContext's Provider wraps and allows for access to state properties above
      for Board, Keyboard and any components below them */}
      <AppContext.Provider
        value={{
          boardState,
          setBoardState,
          currAttemptState,
          setCurrAttemptState,
        }}
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
