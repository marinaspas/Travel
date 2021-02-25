import React from "react";
import "../../App.css";
import "./About.css";

function About() {
  return (
    <div className="page-container about">
      <div className="page-hero about-hero">
        <h1>About</h1>
      </div>
      <h2 className="subheading">Meet the woman behind Trvl Blog </h2>
      <div className="intro">
        <img
          className="about-img"
          src="../images/bio_pic.jpg"
          srcSet="images/bio_pic.jpg 500w,
          images/bio_pic2x.jpg 752w"
          sizes="(max-width: 600px) 500px,
            500px"
          alt="Woman overlooking San Francisco Bridge"
        />
        <div className="intro-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed
            felis eget velit aliquet sagittis. Blandit aliquam etiam erat velit
            scelerisque in. Est ultricies integer quis auctor elit sed vulputate
            mi. Nunc mi ipsum faucibus vitae aliquet. Donec enim diam vulputate
            ut pharetra. Eu volutpat odio facilisis mauris sit amet massa vitae
            tortor.
          </p>

          <p>
            Metus dictum at tempor commodo ullamcorper a lacus. Aliquam faucibus
            purus in massa tempor nec feugiat nisl pretium. Mattis vulputate
            enim nulla aliquet porttitor. Adipiscing tristique risus nec feugiat
            in. Leo vel fringilla est ullamcorper eget. Scelerisque in dictum
            non consectetur a erat nam at. Scelerisque eleifend donec pretium
            vulputate. Nulla posuere sollicitudin aliquam ultrices sagittis orci
            a. Ac tortor vitae purus faucibus ornare. Faucibus in ornare quam
            viverra orci sagittis eu volutpat. Fermentum dui faucibus in ornare
            quam viverra. Vulputate sapien nec sagittis aliquam malesuada
            bibendum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
