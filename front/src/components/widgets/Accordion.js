import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Hide } from "../styles";

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
        <h2>
          {header} {open ? "-" : "+"}
        </h2>
      </Header>
      <Hide ref={currentContent}>{content}</Hide>
      <Content height={height} on={open}>
        {content}
      </Content>
    </>
  );
}

export default Accordion;

const Content = styled.div`
  transition: max-height 0.2s ease-out;
  overflow: hidden;
  max-height: ${props => (props.on ? props.height : 0)}px;
`;
const Header = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
