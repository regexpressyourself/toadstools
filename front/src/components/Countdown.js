import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Countdown() {
  const { font, seconds } = useParams();
  const [displayFont] = useState(font === "gh" ? "Gloria Hallelujah" : font);
  const [countdown, setCountdown] = useState(null);
  const [text, setText] = useState("a moment!");

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

  useEffect(() => {
    let sec = seconds % 60;
    let min = parseInt(seconds / 60);

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
  }, [seconds, text]);

  return !countdown ? null : (
    <Section fontFamily={displayFont && displayFont.replace("+", " ")}>
      <p>{countdown}</p>
    </Section>
  );
}

export default Countdown;
const Section = styled.section`
  font-family: ${props => props.fontFamily};
`;
