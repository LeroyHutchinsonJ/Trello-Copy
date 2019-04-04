import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Card from "./card.js";

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
