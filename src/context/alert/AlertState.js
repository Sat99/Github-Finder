import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import React, { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const showAlert = (msg, clr) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, clr }
    });
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT
        }),
      4000
    );
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        showAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
