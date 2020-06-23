import styled from "styled-components";
export const Section = styled.section`
  font-size: 28px;
  font-family: ${props => props.fontFamily};
  color: ${props => props.color || "black"};
`;

export const Hide = styled.div`
  position: absolute;
  visibility: hidden;
  height: auto;
  width: auto;
  white-space: nowrap; /* Thanks to Herb Caudill comment */
`;
