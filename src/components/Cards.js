import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h2 className="subheading">Check out these Epic Destinations!</h2>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <CardItem 
              src="./images/maldives.jpg"
              text="Explore the serenity of the Maldives"
              label="Tropical"
              path="/services"
            />
            <CardItem 
              src="../images/paris.jpg"
              text="Dusk at the Arc de Triomphe"
              label="Europe"
              path="/services"
            />
            <CardItem 
              src="../images/spain.jpg"
              text="Walking around the narrow streets of Spain"
              label="Europe"
              path="/services"
            />
            <CardItem 
              src="../images/switzerland.jpg"
              text="Taking in the views of the Swiss Mountains"
              label="Europe"
              path="/services"
            />
            <CardItem 
              src="../images/austria.jpg"
              text="Wandering the streets of Vienna"
              label="Europe"
              path="/services"
            />
            <CardItem 
              src="../images/sydney.jpg"
              text="A night at the Sydney Opera"
              label="Oceania"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
