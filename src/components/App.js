import React from "react";
import { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [showText, setShowText] = useState(false);

  const onClickHandler = () => {
    if (showText == false) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  };
  return (
    <div id="main">
      <h1 id="marco-polo">{showText ? "Polo" : "Marco"}</h1>
      <button id="marco-polo-toggler" onClick={onClickHandler}>
        {showText ? "Marco" : "Polo"}
      </button>
    </div>
  );
};

export default App;
