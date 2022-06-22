import styled from "styled-components";

export const StyledHeader = styled.header`
  @media (max-width: 390px) {
    width: 90vw;
  }
  width: ${(props) => props.headerWidth || "369px"};

  height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
