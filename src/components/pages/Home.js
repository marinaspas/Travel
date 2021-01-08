import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from "../Cards";
import Instafeed from "../Instafeed";

function Home () {
  return (
    <>
      <HeroSection />
      <Cards />
      <Instafeed />
    </>
  )
}

export default Home;