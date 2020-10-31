import { GET_USERINFO, SET_GUARANTEE } from "../actions/types";

const INITIAL_STATE = {
  userInfo: {},
  guaranteeInfo: {},
};

export const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERINFO:
      return { ...state, userInfo: { ...action.payload } };
    case SET_GUARANTEE:
      return { ...state, guaranteeInfo: { ...action.payload } };
    default:
      return state;
  }
};
