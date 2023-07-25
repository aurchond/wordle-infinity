import React from "react";
import Key from "./Key";

function Keyboard() {
  // arrays of the possible keys in each row:
  const rowKeys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowKeys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowKeys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      {/* go through all of rowKeys1 and map the keys a new array of Key components for display*/}
      <div className="keyboardRow1">
        {rowKeys1.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>
      <div className="keyboardRow2">
        {rowKeys2.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>
      <div className="keyboardRow3">
        {/* this row also has delete and enter keys */}
        <Key keyValue={"ENTER"} isBigKey />

        {rowKeys3.map((key) => {
          return <Key keyValue={key} />;
        })}

        <Key keyValue={"DELETE"} isBigKey={true} />
      </div>
    </div>
  );
}

export default Keyboard;
