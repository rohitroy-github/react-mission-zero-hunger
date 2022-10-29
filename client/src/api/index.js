import axios from "axios";

// const url = "http://localhost:5000/registration";

const url = "https://react-misison-zero-hunger.herokuapp.com/";

export const fetchInsitutions = () => axios.get(url);

// Register a new institution

export const registerInstitution = (newInstitution) =>
  axios.post(url, newInstitution);

// Register a new individual

export const registerIndividual = (newIndividual) =>
  axios.post(url, newIndividual);
