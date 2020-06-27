import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../assets/styles/marx/marx.scss";
import "../../assets/styles/index.scss";
import logo from "../../assets/img/toadstools.png";

function Home() {
  return (
    <HomeWrapper>
      <Header>
        <h1>
          <img src={logo} alt="toadstools" />
        </h1>
        <Link to="/custom">
          <button>Make your own!</button>
        </Link>
      </Header>
      <hr />
      Or see:
      <ul>
        <li>
          <Link to="/play/info?user=zookeeprr&font=Gloria+Hallelujah">
            Sample now playing info
          </Link>
        </li>
        <li>
          <Link to="/play/art?user=zookeeprr">Sample now playing art</Link>
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
const Header = styled.header`
  text-align: center;
  padding-bottom: 50px;
`;
