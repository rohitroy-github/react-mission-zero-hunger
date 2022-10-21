import React from "react";

import { Navbar, Footer } from "../Components";

import "bootstrap/dist/css/bootstrap.css";
import "../Styles/contact.css";

import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const Conatct = () => {
  const nav = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container about-us-container">
        <div className="heading">
          <h3>Conatct Us</h3>
        </div>
        <p className="paragraph">
          We are a fairly new project, so we are just available at Twitter but
          you'll soon find us almost everywhere :)
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
      </div>
      <Footer />
    </>
  );
};

export default Conatct;
