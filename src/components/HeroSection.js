import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";
import { useWindowSize } from "../hooks/useWindowSize";

function HeroSection() {
  const screen = useWindowSize();

  return (
    <div className="hero-container">
      {screen.width > 1024 && (
        <video
          src="/videos/hero-video.mp4"
          autoPlay
          loop
          muted
          className="hero-video"
        />
      )}

      <h1>ADVENTURE AWAITS</h1>
      <p>what are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
