import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import "../../Styles/login.css";

import { useNavigate } from "react-router-dom";

import { Footer } from "../../Components";

const Login = () => {
  const nav = useNavigate();

  const handleSubmit = () => {
    nav("/Individual/IndividualProfile");
  };

  return (
    <>
      <div className="container personal-login-container">
        <div className="heading">
          <h3>Login As Individual</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div class="text-center">
            <p>
              Not a member?{" "}
              <a href="/Individual/Register">Register As Individual !</a>
            </p>
            <p>or Login with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>

          <div class="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              class="form-control"
              placeholder="Enter Email ?"
            />
            {/* <label class="form-label" for="form2Example1">
              Email address
            </label> */}
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              class="form-control"
              placeholder="Enter Password ?"
            />
            {/* <label class="form-label" for="form2Example2">
              Password
            </label> */}
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label class="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>
          </div>

          <div class="row mb-4 text-center">
            <a href="#!">Forgot password?</a>
          </div>

          <div className="text-center">
            <button
              type="submit"
              class="btn btn-secondary btn-lg btn-block btn-login"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
