import React from "react";
import { useState } from "react/cjs/react.production.min";
import "../styles/App.css";

const App = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div id="main">
      {showText && <h1 id="marco-polo">Marco</h1>}
      <button id="marco-polo-toggler" onClick={() => setShowText(!showText)}>
        Polo
      </button>
    </div>
  );
};

export default App;
