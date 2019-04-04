import React from "react";
import "./styles.css";
import Icon from "./more-options-icon";
import Messages from "./messages.js";

var Card = () => {
  return (
    <div className="card">
      <div className="cardName">To Do</div>
      <Icon />
      <Messages cards={cards} />
      <div className="addCardMessage">+ Add another card</div>
    </div>
  );
};

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

export default Card;
