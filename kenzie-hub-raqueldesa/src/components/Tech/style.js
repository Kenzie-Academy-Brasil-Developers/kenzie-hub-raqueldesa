import styled from "styled-components";

export const StyledTech = styled.div`
  @media (max-width: 390px) {
    h3,
    p {
      font-size: smaller;
    }
  }

  width: 100%;
  min-height: 49px;

  padding: 0 25px;

  background: var(--grey-four);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    p {
      margin: 0 15px;
    }
  }
`;
