import React from 'react';
const CustomContext = React.createContext();

let initialOptions = {};

const customReducer = (state, configAction) => {
  switch (configAction.type) {
    case "USERNAME":
      localStorage.setItem("psst-username", configAction.username);
      return {
        ...state,
        username: configAction.username
      };
    case "COLOR":
      localStorage.setItem("psst-color", configAction.color);
      return {
        ...state,
        color: configAction.color
      };
    case "SECONDS":
      localStorage.setItem("psst-seconds", configAction.seconds);
      return {
        ...state,
        seconds: configAction.seconds
      };
    case "FONT":
      localStorage.setItem("psst-font", configAction.font);
      return {
        ...state,
        font: configAction.font
      };
    default:
      return initialOptions;
  }
};

export { CustomContext, customReducer };
