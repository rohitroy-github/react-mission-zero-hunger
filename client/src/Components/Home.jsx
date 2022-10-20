import React from "react";

// import { Navbar, Footer } from "../Components";

import "bootstrap/dist/css/bootstrap.css";
import "../Styles/home.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  var nav = useNavigate();

  const handleIndividual = () => {
    nav("/Individual/IndividualLogin");
  };

  const handleInstitution = () => {
    nav("/Institution/InstitutionLogin");
  };

  return (
    <>
      {/* <Navbar /> */}

      <div className="container-fluid home-btn-container">
        <button
          type="button"
          onClick={() => {
            handleIndividual();
          }}
          className="btn btn-secondary continue-btn"
        >
          Continue As Individual
        </button>

        <button
          type="button"
          onClick={() => {
            handleInstitution();
          }}
          className="btn btn-secondary continue-btn"
        >
          Continue As Institution
        </button>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
