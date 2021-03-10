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
        <ul className="destination-card">
          <DestinationCard
            src="./images/destination-newyork.jpg"
            text="New York"
            alt="New York"
          />
          <DestinationCard
            src="./images/destination-paris.jpg"
            text="Paris"
            alt="Paris"
          />
          <DestinationCard
            src="./images/destination-dubai.jpg"
            text="Dubai"
            alt="Dubai"
          />
          <DestinationCard
            src="./images/destination-london.jpg"
            text="London"
            alt="London"
          />
          <DestinationCard
            src="./images/destination-kyoto.jpg"
            text="Kyoto"
            alt="Kyoto"
          />
          <DestinationCard
            src="./images/destination-rome.jpg"
            text="Rome"
            alt="Rome"
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
                  <h3 className="cont-name">{destination.continent}</h3>
                  <ul className="countries-list">
                    {destination.country_name.map((place, index) => {
                      return (
                        <li key={index}>
                          <span>{place}</span>
                        </li>
                      );
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
