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

  // function for selecting latter
  const onSelectLetter = (keyValue) => {
    // we're at the last letter space in the row, return
    if (currAttemptState.coordXLetter > 4) return;

    // otherwise, get state of the board right now
    const newBoardState = [...boardState];

    // update the key value (letter) of the state of the newBoard at the current position
    newBoardState[currAttemptState.coordYAttempt][
      currAttemptState.coordXLetter
    ] = keyValue;

    // use our predefined setBoard function to update the board to have this letter
    setBoardState(newBoardState);

    // set the current attempt state to whatever it was before but iterate the letter coordinate position by 1
    setCurrAttemptState({
      ...currAttemptState,
      coordXLetter: currAttemptState.coordXLetter + 1,
    });
  };

  // function for clicking delete
  const onDelete = () => {
    // if it's the first letter coordinate in the word, then can't delete it, return
    if (currAttemptState.coordXLetter === 0) return;

    // otherwise, make a new board state
    const newBoardState = [...boardState];

    // remove the key value (letter) of the state of the newBoard at the most recently
    // placed letter position ( the current coordXLetter position is the blank space after it )
    newBoardState[currAttemptState.coordYAttempt][
      currAttemptState.coordXLetter - 1
    ] = "";

    // use our predefined setBoard function to update the board
    setBoardState(newBoardState);

    // set the current attempt state to whatever it was before but reduce the iterator's position by 1 because deletion
    setCurrAttemptState({
      ...currAttemptState,
      coordXLetter: currAttemptState.coordXLetter - 1,
    });
  };

  // function for clicking enter
  const onEnter = () => {
    // can only go to next attempt if put in 5 letters, return
    if (currAttemptState.coordXLetter < 5) return;

    // otherwise, we're now moving to the next attempt (next row) and the letter coordinate is 0 again
    setCurrAttemptState({
      coordYAttempt: currAttemptState.coordYAttempt + 1,
      coordXLetter: 0,
    });
  };

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
          onSelectLetter,
          onDelete,
          onEnter,
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
