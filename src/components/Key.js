import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyValue, isBigKey }) {
  const { boardState, setBoardState, currAttemptState, setCurrAttemptState } =
    useContext(AppContext);

  const selectLetter = () => {
    // pressed enter key
    if (keyValue == "ENTER") {
      // can only go to next attempt if put in 5 letters, return
      if (currAttemptState.coordXLetter < 5) return;

      // otherwise, we're now moving to the next attempt (next row) and the letter coordinate is 0 again
      setCurrAttemptState({
        coordYAttempt: currAttemptState.coordYAttempt + 1,
        coordXLetter: 0,
      });
    } else if (keyValue == "DELETE") {
    }

    // pressed any other letter
    else {
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
    }
  };

  return (
    // if isBigKey is true, sets the id to big (since delete and enter are big keys and need larger widths)
    // selectLetter under the onclick is a new function created
    <div className="key" id={isBigKey && "big"} onClick={selectLetter}>
      {keyValue}
    </div>
  );
}

export default Key;
