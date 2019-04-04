import React from "react";
import "./styles.css";
import Icon from "./more-options-icon";

var Card = ({ cardObject }) => {
  return (
    <div className="card">
      <div className="cardName">To Do</div>
      <Icon />
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
  }
];
export default Card;
