import React from "react";

// import { Navbar, Footer } from "../Components";

import "bootstrap/dist/css/bootstrap.css";
import "../Styles/home.css";

import { useNavigate } from "react-router-dom";

const PrimaryHome = () => {
  var nav = useNavigate();

  const toAboutUsPage = () => {
    nav("About");
  };
  return (
    <>
      {/* <Navbar /> */}

      <div className="container-fluid home-btn-container">
        <div className="big-heading">
          <p>Mission Zero Hunger</p>
        </div>
        <div className="aboutus-btn-container">
          <button
            onClick={() => {
              toAboutUsPage();
            }}
            className="btn btn-secondary aboutus-btn"
          >
            What's Mission Zero Hunger ?
          </button>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default PrimaryHome;
