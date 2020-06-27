import React, { useReducer } from "react";
import { CustomContext, customReducer } from "./CustomContext";
import { Section } from "../styles";
import CountdownForm from "../forms/CountdownForm";
import PlayForm from "../forms/PlayForm";
import logo from "../../assets/img/toadstools-simple.png";

function Custom() {
  const [config, configDispatch] = useReducer(customReducer, {});
  const font = config.font;

  return (
    <CustomContext.Provider value={{ config, configDispatch }}>
      <Section>
        <h1>
          <img src={logo} alt="toadstools" />
        </h1>
        <p>Choose any of the following:</p>
      </Section>
      <hr />
      <PlayForm type="art" />
      <hr />
      <PlayForm type="info" />
      <hr />
      <CountdownForm />
      <hr />
    </CustomContext.Provider>
  );
}

export default Custom;
