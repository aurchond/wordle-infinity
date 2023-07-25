import React, { useContext, useCallback, useEffect } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  // arrays of the possible keys in each row:
  const rowKeys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowKeys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowKeys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  // the required functions from the app level context
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  // handle keyboard function for physical keyboard events with the useCallback hook
  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    }
    // assume it's a letter
    else {
      // go through each row and see if the event.key is equivalent to one of the keys in the array of letters above
      rowKeys1.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          // handle the selection of the key similar to how the on-screen keys are handled
          onSelectLetter(key);
        }
      });

      rowKeys2.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          // handle the selection of the key similar to how the on-screen keys are handled
          onSelectLetter(key);
        }
      });

      rowKeys3.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          // handle the selection of the key similar to how the on-screen keys are handled
          onSelectLetter(key);
        }
      });
    }
  });

  // handle physical keyboard events with the useEffect hook
  useEffect(() => {
    // event listener is set to call the handleKeyboard function whenever a key is pressed
    document.addEventListener("keydown", handleKeyboard);

    // cleanup operations to remove the mounted event listener after its done with it
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
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
