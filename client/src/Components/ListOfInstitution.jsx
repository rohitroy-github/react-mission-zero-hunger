import React from "react";

import { useSelector } from "react-redux";

import { Navbar, Footer } from "../Components";

import { Container, Typography, Grid, Grow } from "@material-ui/core";

import RegisteredInstitutions from "./RegisteredInstitutions/RegisteredInstitutions";

import "bootstrap/dist/css/bootstrap.css";

const ListOfInstitution = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <>
      <Navbar />
      <div className="container about-us-container">
        <div className="heading">
          <h3>Registered Institutions</h3>
        </div>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-betwwen"
              alignItems="stretch"
              spacing={4}
            >
              <Grid item xs={12} sm={7}>
                <RegisteredInstitutions />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </div>
      <Footer />
    </>
  );
};

export default ListOfInstitution;
