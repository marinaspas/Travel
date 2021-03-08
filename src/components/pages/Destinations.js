import React from "react";
import "../../App.css";
import "./Destinations.css";
import DestinationCard from "../DestinationCard";
import { Places } from "../Places";

function Destinations() {
  return (
    <div className="page-container">
      <div className="page-hero destinations-hero">
        <h1>Destinations</h1>
      </div>
      <div className="destinations-wrapper">
        <h2 className="subheading">Popular Destinations you need to visit</h2>
        <ul className="destinations-list">
          <DestinationCard
            src="./images/destination-newyork.jpg"
            text="New York"
            altText="New York"
          />
          <DestinationCard
            src="./images/destination-paris.jpg"
            text="Paris"
            altText="Paris"
          />
          <DestinationCard
            src="./images/destination-dubai.jpg"
            text="Dubai"
            altText="Dubai"
          />
          <DestinationCard
            src="./images/destination-london.jpg"
            text="London"
            altText="London"
          />
          <DestinationCard
            src="./images/destination-kyoto.jpg"
            text="Kyoto"
            altText="Kyoto"
          />
          <DestinationCard
            src="./images/destination-rome.jpg"
            text="Rome"
            altText="Rome"
          />
        </ul>
      </div>
      <div className="places-wrapper">
        <h2 className="subheading">Where I have been</h2>
        <ul className="dest-list">
          {Places.map((destination, index) => {
            return (
              <li key={index}>
                <div className="dest-card">
                  <p>{destination.continent}</p>
                  <ul>
                    {destination.country_name.map((place, index) => {
                      return <li key={index}>{place}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Destinations;
