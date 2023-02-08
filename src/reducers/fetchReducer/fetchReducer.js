import { useEffect, useReducer } from "react";

export const InitialState = {
  data: null,
  loading: false,
  error: null,
};

export const ACTION_TYPE = {
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_DATA: "SET_DATA",
};

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "SET_DATA":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return state;
  }
};
