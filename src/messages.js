import React from "react";

var Messages = ({ cards }) => {
  return (
    <div>
      {cards.map(cardObject => (
        <li className="cardObject">{cardObject.message}</li>
      ))}
    </div>
  );
};

export default Messages;
