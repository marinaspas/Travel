import React from 'react';
import './Instafeed.css';
import InstafeedItem from './InstafeedItem';
import { Button } from './Button';

function Instafeed() {
  return (
    <>
      <h2 class="subheading">Instafeed</h2>
      <div className="instafeed_wrapper">
          <div className="instafeed_container">
            <ul className="instafeed_list">
              <InstafeedItem src="./images/instapic_1.jpg" alt="my pic here" />
              <InstafeedItem src="./images/instapic_2.jpg" alt="my pic here" />
              <InstafeedItem src="./images/instapic_3.jpg" alt="my pic here" />
              <InstafeedItem src="./images/instapic_4.jpg" alt="my pic here" />
              <InstafeedItem src="./images/instapic_5.jpg" alt="my pic here" />
            </ul>
            <div className="btn-wrapper">
              <Button className="btns" buttonStyle='btn--secondary' buttonSize="btn--small">
                follow me on instagram <i className="fab fa-instagram"></i>
              </Button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Instafeed;
