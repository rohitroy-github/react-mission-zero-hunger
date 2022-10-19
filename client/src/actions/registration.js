import * as api from "../api";

export const registration = () => async (dispatch) => {
  try {
    const { data } = await api.fetchInsitutions();

    dispatch({ type: "FETCH_INSTITUTIONS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Action for registering a new institution

export const registerInstitution = (newInstitution) => async (dispatch) => {
  try {
    const { data } = await api.registerInstitution(newInstitution);

    dispatch({ type: "REGISTER_INSTITUTION", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Action for registering a new individual

export const registerIndividual = (newIndividual) => async (dispatch) => {
  try {
    const { data } = await api.registerIndividual(newIndividual);

    dispatch({ type: "REGISTER_INDIVIDUAL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
