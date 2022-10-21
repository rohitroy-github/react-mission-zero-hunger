import React from "react";

import "../Styles/navbar.css";
// import solidarity from "../assets/pictures/solidarity.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import ProfilePicture from "../assets/pictures/ProfilePicture.png";
import Cookies from "js-cookie";

import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = () => {
    if (Cookies.get("token")) {
      navigate("/user/profile");
    }

    if (Cookies.get("club")) {
      navigate("/clubs/profile");
    }
  };

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <img
            src={
              solidarity ||
              "https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
            }
            onClick={() => window.location.replace("/")}
            alt="Milan-logo"
            className="nav_bramhin_img"
          />

          <h3 className="logo-title">Mission Zero Hunger</h3>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item home">
                <Link to={"/"}>Home</Link>
                <div
                  className={
                    "" + (location.pathname === "/" ? "active-link" : "")
                  }
                ></div>
              </li>

              <li className="nav-item home">
                <Link to={"/display/clubs"}>Clubs</Link>
                <div
                  className={
                    "" +
                    (location.pathname === "/display/clubs"
                      ? "active-link"
                      : "")
                  }
                ></div>
              </li>

              <li className="nav-item home">
                <Link to="/display/events">Events</Link>
                <div
                  className={
                    "" +
                    (location.pathname === "/display/events"
                      ? "active-link"
                      : "")
                  }
                ></div>
              </li>

              <li className="nav-item home">
                <Link to={"/about-us"}>About Us</Link>
                <div
                  className={
                    "" +
                    (location.pathname === "/about-us" ? "active-link" : "")
                  }
                ></div>
              </li>

              <li className="nav-item home">
                <Link to={"/contact"}>Contact</Link>
                <div
                  className={
                    "" + (location.pathname === "/contact" ? "active-link" : "")
                  }
                ></div>
              </li

              {(Cookies.get("token") || Cookies.get("club")) && (
                <img
                  onClick={handleNavigate}
                  src={
                    "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE="
                  }
                  alt="lol"
                  className="nav_user_img"
                />
              )}
            </ul>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid justify-content-between navbar-container">
          {/* Left Nav  */}
          <ul class="navbar-nav flex-row d-none d-md-flex">
            <li class="nav-item me-3 me-lg-1 active">
              <a class="nav-link" href="/">
                <p>Mission Zero Hunger</p>
              </a>
            </li>
          </ul>

          {/* Center Nav  */}
          <ul class="navbar-nav flex-row d-none d-md-flex">
            <li class="nav-item me-3 me-lg-1 active">
              <a class="nav-link" href="/">
                <p>Home</p>
              </a>
            </li>

            <li class="nav-item me-3 me-lg-1 active">
              <a class="nav-link" href="/Contact">
                <p>Contact</p>
              </a>
            </li>

            <li class="nav-item me-3 me-lg-1 active">
              <a class="nav-link" href="/About">
                <p>About Us</p>
              </a>
            </li>

            <li class="nav-item me-3 me-lg-1 active">
              <a class="nav-link" href="/ListOfInstitution">
                <p>Registered Institutions</p>
              </a>
            </li>
          </ul>

          {/* Right Nav  */}
          <ul class="navbar-nav flex-row">
            <li class="nav-item me-3 me-lg-1 active">
              <a class="nav-link" href="#">
                <p>Profile</p>
              </a>
            </li>

            <li class="nav-item me-3 me-lg-1 active">
              <a class="nav-link" href="/">
                <p>Log Out</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
