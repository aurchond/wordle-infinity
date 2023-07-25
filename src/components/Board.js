import React from "react";
import Letter from "./Letter";

function Board() {
  // state: boardState is the value (state variable) and setBoardState is the function to update this state
  // useState is the built-in React hook used to manage state in functional components, with an initial values in its argument
  // const [boardState, setBoardState] = useState(boardDefault);

  return (
    <div className="board">
      <div className="row">
        {/* the first row/attempt and all of its letter positions, 
        two props are being passed to the Letter component with the given values*/}
        <Letter coordXLetter={0} coordYAttempt={0} />
        <Letter coordXLetter={1} coordYAttempt={0} />
        <Letter coordXLetter={2} coordYAttempt={0} />
        <Letter coordXLetter={3} coordYAttempt={0} />
        <Letter coordXLetter={4} coordYAttempt={0} />
      </div>
      <div className="row">
        {/* the second row/attempt and all of its letter positions */}
        <Letter coordXLetter={0} coordYAttempt={1} />
        <Letter coordXLetter={1} coordYAttempt={1} />
        <Letter coordXLetter={2} coordYAttempt={1} />
        <Letter coordXLetter={3} coordYAttempt={1} />
        <Letter coordXLetter={4} coordYAttempt={1} />
      </div>
      <div className="row">
        <Letter coordXLetter={0} coordYAttempt={2} />
        <Letter coordXLetter={1} coordYAttempt={2} />
        <Letter coordXLetter={2} coordYAttempt={2} />
        <Letter coordXLetter={3} coordYAttempt={2} />
        <Letter coordXLetter={4} coordYAttempt={2} />{" "}
      </div>
      <div className="row">
        <Letter coordXLetter={0} coordYAttempt={3} />
        <Letter coordXLetter={1} coordYAttempt={3} />
        <Letter coordXLetter={2} coordYAttempt={3} />
        <Letter coordXLetter={3} coordYAttempt={3} />
        <Letter coordXLetter={4} coordYAttempt={3} />
      </div>
      <div className="row">
        <Letter coordXLetter={0} coordYAttempt={4} />
        <Letter coordXLetter={1} coordYAttempt={4} />
        <Letter coordXLetter={2} coordYAttempt={4} />
        <Letter coordXLetter={3} coordYAttempt={4} />
        <Letter coordXLetter={4} coordYAttempt={4} />
      </div>
      <div className="row">
        <Letter coordXLetter={0} coordYAttempt={5} />
        <Letter coordXLetter={1} coordYAttempt={5} />
        <Letter coordXLetter={2} coordYAttempt={5} />
        <Letter coordXLetter={3} coordYAttempt={5} />
        <Letter coordXLetter={4} coordYAttempt={5} />
      </div>
    </div>
  );
}

export default Board;
