import React, { useContext } from "react";
import { CustomContext } from "../pages/CustomContext";
import { Section } from "../styles";
import openTab from "../../services/openTab";
import Constants from "../../services/Constants";
import { Input, FontInput } from "../forms/FormInputs/FormInputs";
import Accordion from "../widgets/Accordion";

const { labels } = Constants;

function PlayForm({ type = "info" }) {
  const { config, configDispatch } = useContext(CustomContext);

  const color = config.color;
  const setColor = nextColor =>
    configDispatch({ type: "COLOR", color: nextColor });
  const username = config.username;
  const setUsername = nextUsername =>
    configDispatch({ type: "USERNAME", username: nextUsername });
  const font = config.font;
  const setFont = nextFont => configDispatch({ type: "FONT", font: nextFont });

  return (
    <Section fontFamily={font}>
      <Accordion
        header={`Now playing ${type}`}
        content={
          <>
            <Input
              set={setUsername}
              value={username}
              name="username"
              label={labels.username}
            />
            <Input
              set={setColor}
              value={color}
              name="color"
              type="color"
              label={labels.color}
            />
            <FontInput font={font} setFont={setFont} />
            {type === "art" ? (
              <button
                onClick={() =>
                  openTab("/play/art", {
                    user: username,
                    font: font,
                    color: color
                  })
                }
              >
                See Now Playing Art
              </button>
            ) : (
              <button
                onClick={() =>
                  openTab("/play/info", {
                    user: username,
                    font: font,
                    color: color
                  })
                }
              >
                See Now Playing Info
              </button>
            )}
          </>
        }
      />
    </Section>
  );
}

export default PlayForm;
