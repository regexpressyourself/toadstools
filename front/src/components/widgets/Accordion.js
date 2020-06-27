import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Hide } from "../styles";
import shroom1 from "../../assets/img/shroom1.png";
import shroom3 from "../../assets/img/shroom3.png";

function Accordion({ header, content }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const currentContent = useRef(null);

  useEffect(() => {
    const height =
      currentContent.current && currentContent.current.clientHeight + 1;
    setHeight(height);
  }, []);

  return (
    <>
      <Header onClick={() => setOpen(!open)}>
        <img src={open ? shroom3 : shroom1} alt="-" />
        <h2>{header}</h2>
      </Header>
      <Hide ref={currentContent}>{content}</Hide>
      <Content height={height} open={open}>
        {content}
      </Content>
    </>
  );
}

export default Accordion;

const Content = styled.div`
  transition: max-height 0.2s ease-out;
  overflow: hidden;
  max-height: ${props => (props.open ? props.height : 0)}px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
  img {
    height: 50px;
    width: 50px;
    margin-right: 10px;
  }
`;
