import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

function Home() {
  return (
    <>
      <h1>PSST</h1>
      <p>
        Pretty
        <br />
        Sweet
        <br />
        Streaming
        <br />
        Tools
        <br />
      </p>
      <Link to="/play/zookeeprr/info/Gloria+Hallelujah">
        Sam's now playing info
      </Link>
      <br />
      <Link to="/play/zookeeprr/art">Sam's now playing art</Link>
      <br />
      <Link to="/countdown/Gloria+Hallelujah">Countdown timer</Link>
    </>
  );
}

export default Home;
const Info = styled.div`
  font-family: ${props => props.fontFamily};
`;
