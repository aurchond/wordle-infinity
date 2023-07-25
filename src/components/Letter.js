import React, { useContext } from "react";
import { AppContext } from "../App";
// import Board from "./Board";

// each individual letter of each individual attempt of guessing the word
// parameters: x and y values - letter position and attempt value
function Letter({ letterPos, attemptVal }) {
  const { board } = useContext(AppContext);

  // access each letter with their corresponding x and y values in the matrix
  const letter = board[attemptVal][letterPos];
  // className="letter" calls the corresponding css and makes it formatted
  return <div className="letter">{letter}</div>;
}

export default Letter;
