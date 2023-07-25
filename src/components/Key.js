import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyValue, isBigKey }) {
  // the required functions from the app level context
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    // pressed enter key
    if (keyValue == "ENTER") {
      onEnter();
    }

    // pressed delete key
    else if (keyValue == "DELETE") {
      onDelete();
    }

    // pressed any other key
    else {
      onSelectLetter(keyValue);
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
