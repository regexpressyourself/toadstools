import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <HomeWrapper>
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
      <Link to="/play/info?user=zookeeprr&font=Gloria+Hallelujah">
        Sam's now playing info
      </Link>
      <br />
      <Link to="/play/art?user=zookeeprr">Sam's now playing art</Link>
      <br />
      <Link to="/countdown/?font=Gloria+Hallelujah">Countdown timer</Link>
    </HomeWrapper>
  );
}

export default Home;
const HomeWrapper = styled.section`
  font-size: 28px;
`;
