import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic Destinations!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <CardItem 
              src="images/maldives.jpg"
              text="Explore the serenity of the Maldives"
              label="Adventure"
              path="/services"
            />
            <CardItem 
              src="images/paris.jpg"
              text="Explore the serenity of the Maldives"
              label="Adventure"
              path="/services"
            />
            <CardItem 
              src="images/spain.jpg"
              text="Explore the serenity of the Maldives"
              label="Adventure"
              path="/services"
            />
            <CardItem 
              src="images/switzerland.jpg"
              text="Explore the serenity of the Maldives"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
