import styled from "styled-components";

export const StyledSection = styled.section`
  @media (max-width: 390px) {
    width: 90vw;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-content: center;
  }
  width: 100vw;

  height: ${(props) => props.height || "118px"};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: center;
  margin-top: 20px;
`;
export const StyledContainer = styled.section`
  @media (max-width: 770px) {
    width: 95vw;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 780px;
  height: 418px;
  overflow-y: scroll;

  gap: 20px;
  background-color: ${(props) => props.backgroundColor || "var(--grey-three)"};

  padding: 22px;
  border-radius: 4px;
`;
