import React from "react";

import { Navbar, Footer } from "../Components";

import "bootstrap/dist/css/bootstrap.css";
import "../Styles/about.css";

import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const nav = useNavigate();

  const takeToSecondaryHomePage = () => {
    nav("/Home");
  };

  return (
    <>
      <Navbar />
      <div className="container about-us-container">
        <div className="heading">
          <h3>
            Something About <b>Mission Zero Hunger</b>
          </h3>
        </div>

        <p className="paragraph">
          <b>Mission Zero Hunger</b> aims to provide food to every needy out
          there with the <b>help</b> of your smallest contributions, so that
          <b> nobody</b> has to sleep with a hungry stomach. You might have some{" "}
          <b>food to share</b>, some in <b>excess</b> or maybe something which
          you just wanna <b>donate</b>, <b>send</b> or even <b>order</b> for
          some people in need just how simply you order for yourself, just let
          us know and we'll do the rest, it's that simple.
          <br />
          We'll come to your place to pick up the food packed in a container and
          drop that off to a needy one or at a place selected by you. We'll
          charge a <b>minimal delivery expense</b> for the food to be
          transported across your city. We have a wide network of genuine{" "}
          <b>institutions</b> & <b>NGOs</b> who have constant demand of food
          sipplies.Your smallest contributions can be a great help for Mission
          Zero Hunger.
        </p>

        <a href="https://twitter.com/rohitroy_R">
          <button
            type="button"
            // onClick={() => {
            //   connectSocial();
            // }}
            className="btn btn-secondary btn-block social-btn"
          >
            Connect On Twitter
          </button>
        </a>

        <button
          type="button"
          onClick={() => {
            takeToSecondaryHomePage();
          }}
          className="btn btn-secondary social-btn"
        >
          I Wanna Be Part Of The Mission
        </button>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
