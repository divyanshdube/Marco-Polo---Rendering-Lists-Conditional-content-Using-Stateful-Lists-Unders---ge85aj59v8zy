import React from "react";
import "../styles/App.css";

const App = () => {
  isToggleMarco = true;

  textHandler = () => {
    setState((state) => {
      isToggleMarco = !state.isToggleMarco;
    });
  };

  return (
    <div id="main">
      <h1 id="marco-polo">Marco</h1>
      <button id="marco-polo-toggler" onClick={textHandler}>
        Polo
      </button>
      {state.isToggleMarco ? "Polo" : "Marco"}
    </div>
  );
};

export default App;
