import React from "react";
import "./Tours.css";
import { Button } from "./Button";

function Tours() {
  return (
    <div className="tours__wrapper">
      <h2 className="subheading">
        The best adventures start with Discovery Tours
      </h2>
      <div className="container">
        <div className="tours__content">
          <img
            src="images/tours_pic.jpg"
            srcSet="images/tours_pic.jpg 376w,
                    images/tours_pic2x.jpg 752w"
            sizes="(max-width: 600px) 480px,
            480px"
            alt="people having a camel tour in a desert"
            className="tours__pic"
          />
          <div>
            <p>
              Travel with us. We create tours that focus on the connections
              between people and places. These tours are often based around an
              event, theme or activity, but it's the people you meet and spend
              time with who make the trip.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button
              className="btns"
              buttonStyle="btn-dark--outline"
              buttonSize="btn--small"
            >
              more details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tours;
