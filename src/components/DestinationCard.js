import React from "react";

function DestinationCard(props) {
  return (
    <li className="dest-item">
      <div>
        <img src={props.src} alt={props.alt} className="dest-img" />
        <p className="dest-item-label">{props.text}</p>
      </div>
    </li>
  );
}

export default DestinationCard;
