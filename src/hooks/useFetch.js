import { useEffect, useReducer } from "react";
import {
  ACTION_TYPE,
  InitialState,
  fetchReducer,
} from "../reducers/fetchReducer/fetchReducer";

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, InitialState);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      dispatch({ type: ACTION_TYPE.SET_LOADING });
      const res = await fetch(url, { signal: abortController.signal });
      if (!res.ok) {
        dispatch({ type: ACTION_TYPE.SET_ERROR, payload: res.statusText });
        throw new Error(res.statusText);
      }
      const data = await res.json();
      dispatch({ type: ACTION_TYPE.SET_DATA, payload: data });
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { ...state };
};
