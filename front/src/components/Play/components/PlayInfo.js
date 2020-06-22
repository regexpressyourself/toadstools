import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function PlayInfo({ songData }) {
  const { font } = useParams();
  const text = useRef(null);
  const [width, setWidth] = useState(0);
  const [displayFont] = useState(font === "gh" ? "Gloria Hallelujah" : font);

  const songText = `${songData.song} // ${songData.artist} // ${songData.album}`;

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
    const width = text.current && text.current.clientWidth + 1;
    setWidth(width);
  }, [songData]);

  return !songData.song ? null : (
    <Info
      elWidth={width}
      fontFamily={displayFont && displayFont.replace("+", " ")}
    >
      <InfoItem elWidth={width}>{songText}</InfoItem>
      <InfoItem elWidth={width} elOffset={width}>
        {songText}
      </InfoItem>
      <Hide ref={text}>{songText}</Hide>
    </Info>
  );
}

export default PlayInfo;
const Info = styled.div`
  font-family: ${props => props.fontFamily};
  position: relative !important;
  width: 300px;
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 220ms ease-in-out;
  white-space: nowrap;
`;
const InfoItem = styled.span`
  animation: scroll ${props => props.elWidth / 42}s linear 0s infinite;
  position: absolute;
  left: ${props => props.elOffset + 50 || 0}px;
  @keyframes scroll {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-${props => props.elWidth + 50 || 0}px, 0);
    }
  }
`;
const Hide = styled.div`
  position: absolute;
  visibility: hidden;
  height: auto;
  width: auto;
  white-space: nowrap; /* Thanks to Herb Caudill comment */
`;
