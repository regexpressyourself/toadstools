import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const fonts = [
  "sans-serif",
  "Anton",
  "Gloria+Hallelujah",
  "Indie+Flower",
  "Josefin+Sans"
];

function Custom() {
  const [chosenFont, setChosenFont] = useState();
  const [redirect, setRedirect] = useState();
  const [username, setUsername] = useState();
  const [color, setColor] = useState();
  const [time, setTime] = useState();

  return redirect ? (
    <Redirect push to={redirect} />
  ) : (
    <>
      <Section color={color} fontFamily={chosenFont}>
        <h1>PSST</h1>
        <p>
          <em>Pretty Sweet Streaming Tools</em>
        </p>
      </Section>
      <hr />
      <Section color={color} fontFamily={chosenFont}>
        <h2>Now playing info:</h2>
        <br />
        <label htmlFor="username">Last.fm Username</label>{" "}
        <input
          value={username}
          type="text"
          id="username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <br />
        <label htmlFor="color">Color</label>{" "}
        <input
          type="text"
          value={color}
          id="color"
          onChange={({ target }) => setColor(target.value)}
        />
        <br />
        <label htmlFor="font">Font choice</label>{" "}
        <select
          value={(chosenFont && chosenFont.replace(" ", "+")) || ""}
          onChange={({ target }) =>
            setChosenFont(target.value.replace("+", " "))
          }
        >
          {fonts.map(font => (
            <Option key={font} fontFamily={font} value={font}>
              {font.replace("+", " ")}
            </Option>
          ))}
        </select>
        <br />
        <button
          onClick={() =>
            setRedirect(
              `/play/info?user=${username}&font=${chosenFont}&color=${color}`
            )
          }
        >
          See Now Playing Info
        </button>
        <br />
        <button
          onClick={() =>
            setRedirect(
              `/play/art?user=${username}&font=${chosenFont}&color=${color}`
            )
          }
        >
          See Now Playing Art
        </button>
      </Section>
      <hr />
      <Section color={color} fontFamily={chosenFont}>
        <h2>Countdown timer:</h2>
        <br />
        <label htmlFor="time">Time (in seconds)</label>{" "}
        <input
          type="number"
          id="time"
          value={time}
          onChange={({ target }) => setTime(target.value)}
        />
        <br />
        <label htmlFor="color">Color</label>{" "}
        <input
          type="text"
          value={color}
          id="color"
          onChange={({ target }) => setColor(target.value)}
        />
        <br />
        <label htmlFor="font">Font choice</label>{" "}
        <select
          value={(chosenFont && chosenFont.replace(" ", "+")) || ""}
          onChange={({ target }) =>
            setChosenFont(target.value.replace("+", " "))
          }
        >
          {fonts.map(font => (
            <Option key={font} fontFamily={font} value={font}>
              {font.replace("+", " ")}
            </Option>
          ))}
        </select>
        <br />
        <button
          onClick={() =>
            setRedirect(
              `/countdown?seconds=${time}&font=${chosenFont}&color=${color}`
            )
          }
        >
          Start timer
        </button>
      </Section>
      <hr />
    </>
  );
}

export default Custom;
const Section = styled.section`
  font-size: 28px;
  font-family: ${props => props.fontFamily};
  color: ${props => props.color || "black"};
`;
const Option = styled.option`
  font-family: ${props => props.fontFamily};
`;
