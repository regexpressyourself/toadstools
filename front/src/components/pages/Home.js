import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <HomeWrapper>
      <h1>PSST</h1>
      <p>
        <em>Pretty Sweet Streaming Tools</em>
      </p>
      <Link to="/custom">
        <button>Make your own!</button>
      </Link>
      <br />
      <br />
      <hr />
      Or see:
      <ul>
        <li>
          <Link to="/play/info?user=zookeeprr&font=Gloria+Hallelujah">
            Sam's now playing info
          </Link>
        </li>
        <li>
          <Link to="/play/art?user=zookeeprr">Sam's now playing art</Link>
        </li>
        <li>
          <Link to="/countdown/?font=Gloria+Hallelujah">5 minute timer</Link>
        </li>
      </ul>
    </HomeWrapper>
  );
}

export default Home;
const HomeWrapper = styled.section`
  font-size: 28px;
`;
