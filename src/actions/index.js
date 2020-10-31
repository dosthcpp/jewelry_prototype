import { GET_USERINFO, SET_GUARANTEE } from "./types";

export const fetchUserinfo = (name, email) => {
  return {
    type: GET_USERINFO,
    payload: { name, email },
  };
};

export const setGuaranteeInfo = (email, info) => {
  return {
    type: SET_GUARANTEE,
    payload: { email, ...info },
  };
};
