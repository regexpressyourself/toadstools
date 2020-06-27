import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/toadstools.png";

function Home() {
  return (
    <HomeWrapper>
      <h1>
        <img src={logo} alt="toadstools" />
      </h1>
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
            Sample now playing info
          </Link>
        </li>
        <li>
          <Link to="/play/art?user=zookeeprr">Sampl now playing art</Link>
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
