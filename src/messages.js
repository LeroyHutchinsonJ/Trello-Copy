import React from "react";

var Messages = ({ cards }) => {
  return (
    <div>
      {cards.map(cardObject => (
        <span className="cardObject">{cardObject.message}</span>
      ))}
    </div>
  );
};

export default Messages;
