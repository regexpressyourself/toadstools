import React, { useContext } from "react";
import { CustomContext } from "../pages/CustomContext";
import { Section } from "../styles";
import { Input, FontInput } from "../forms/FormInputs/FormInputs";
import openTab from "../../services/openTab";
import Constants from "../../services/Constants";
import Accordion from "../widgets/Accordion";
const { labels } = Constants;

function CountdownForm() {
  const { config, configDispatch } = useContext(CustomContext);

  const font = config.font;
  const color = config.color;
  const seconds = config.seconds;
  const setSeconds = nextSeconds =>
    configDispatch({ type: "SECONDS", seconds: nextSeconds });
  const setFont = nextFont => configDispatch({ type: "FONT", font: nextFont });
  const setColor = nextColor =>
    configDispatch({ type: "COLOR", color: nextColor });

  return (
    <Section fontFamily={font}>
      <Accordion
        header="Countdown timer"
        content={
          <>
            <Input
              set={setSeconds}
              value={seconds}
              name="seconds"
              type="number"
              label={labels.seconds}
            />
            <Input
              set={setColor}
              value={color}
              name="color"
              type="color"
              label={labels.color}
            />

            <FontInput font={font} setFont={setFont} />
            <button
              onClick={() =>
                openTab("/countdown", {
                  seconds: seconds,
                  font: font,
                  color: color
                })
              }
            >
              Start timer
            </button>
          </>
        }
      />
    </Section>
  );
}

export default CountdownForm;
