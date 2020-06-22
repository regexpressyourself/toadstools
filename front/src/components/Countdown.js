import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useFont from "../hooks/useFont";
import useQueryParams from "../hooks/useQueryParams";

function Countdown() {
  const query = useQueryParams();
  const seconds = query.get("seconds") || 300;
  const displayFont = useFont();
  const [countdown, setCountdown] = useState(null);

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
        setCountdown("a moment!");
      }
    }, 1000);
  }, [seconds]);

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
