import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Countdown() {
  const { font } = useParams();
  const [displayFont] = useState(font === "gh" ? "Gloria Hallelujah" : font);
  const [countdown, setCountdown] = useState(null);
  const [text, setText] = useState("Done");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (displayFont) {
      const link = document.createElement("link");
      link.setAttribute(
        "href",
        `https://fonts.googleapis.com/css2?family=${displayFont}&display=swap`
      );
      link.setAttribute("rel", "stylesheet");

      document.head.appendChild(link);
    }
  }, [displayFont]);

  const startTimer = () => {
    let min = minutes;
    let sec = seconds;

    setInterval(function() {
      setCountdown(
        `${min || "0"}:${sec < 10 ? "0" + ("0" + sec).slice(-1) : sec}`
      );

      if (--sec < 0 && min >= 0) {
        --min;
        sec = 59;
      }
      if (min < 0) {
        setCountdown(text);
      }
    }, 1000);
  };

  return countdown ? (
    <Section fontFamily={displayFont && displayFont.replace("+", " ")}>
      <p>{countdown}</p>
    </Section>
  ) : (
    <Section fontFamily={displayFont && displayFont.replace("+", " ")}>
      <label for="seconds">Seconds</label>{" "}
      <input
        max="59"
        type="number"
        min="0"
        id="seconds"
        onChange={({ target }) => setSeconds(target.value)}
      />
      <br />
      <label for="minutes">Minutes</label>{" "}
      <input
        max="59"
        min="0"
        type="number"
        id="minutes"
        onChange={({ target }) => setMinutes(target.value)}
      />
      <br />
      <label for="text">Completion text</label>{" "}
      <input
        type="text"
        id="text"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <br />
      <button disabled={minutes > 59 || seconds > 59} onClick={startTimer}>
        Start Timer
      </button>
    </Section>
  );
}

export default Countdown;
const Section = styled.section`
  font-family: ${props => props.fontFamily};
`;
