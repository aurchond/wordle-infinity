import React, { useContext } from "react";
import { AppContext } from "../App";
// import Board from "./Board";

// each individual letter of each individual attempt of guessing the word
// parameters: x and y values - letter position and attempt value
function Letter({ coordXLetter, coordYAttempt }) {
  const { boardState } = useContext(AppContext);

  // access each letter with their corresponding x and y values in the matrix
  // note: accessing coordYAttempt then coordXLetter because that's its setup in the default board
  const letter = boardState[coordYAttempt][coordXLetter];
  // className="letter" calls the corresponding css and makes it formatted
  return <div className="letter">{letter}</div>;
}

export default Letter;
