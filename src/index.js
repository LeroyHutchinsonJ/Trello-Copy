import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Card from "./card.js";

function App() {
  return (
    <div className="App">
      <Card cards={cards} />
    </div>
  );
}
var cards = [
  {
    id: 1,
    message: "Check if the stove is on"
  },
  {
    id: 2,
    message: "Practice programming today"
  },
  {
    id: 3,
    message: "Go to the gym to workout"
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
