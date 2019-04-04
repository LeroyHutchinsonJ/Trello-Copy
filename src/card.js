import React from "react";
import "./styles.css";
import Icon from "./more-options-icon";
import Messages from "./messages.js";

var Card = ({ cards }) => {
  return (
    <div className="card">
      <div className="cardName">To Do</div>
      <Icon />
      <Messages cards={cards} />
      <div className="addCardMessage">+ Add another card</div>
    </div>
  );
};

export default Card;
