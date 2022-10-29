import React from "react";

import { Navbar, Footer } from "../../Components";

import "bootstrap/dist/css/bootstrap.css";
import "../../Styles/profile.css";

import { useNavigate } from "react-router-dom";

const Profile = () => {
  var nav = useNavigate();

  const handleSendFoodSupplies = () => {
    nav("/Individual/SendFoodSupplies");
  };

  const handleJoinAnEvent = () => {
    nav("/Individual/JoinAnEvent");
  };

  const handleListOfInstitution = () => {
    nav("/Individual/ListOfInstitution");
  };

  return (
    <>
      <Navbar />

      <div className="container-fluid home-btn-container">
        <button
          type="button"
          onClick={() => {
            handleSendFoodSupplies();
          }}
          className="btn btn-secondary continue-btn"
        >
          Send Food Supplies
        </button>

        <button
          type="button"
          onClick={() => {
            handleJoinAnEvent();
          }}
          className="btn btn-secondary continue-btn"
        >
          Join An Event
        </button>

        <button
          type="button"
          onClick={() => {
            handleListOfInstitution();
          }}
          className="btn btn-secondary continue-btn"
        >
          List Of Institution
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
