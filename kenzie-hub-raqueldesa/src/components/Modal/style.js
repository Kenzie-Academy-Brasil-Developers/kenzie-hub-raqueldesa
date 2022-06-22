import styled from "styled-components";
export const StyledModal = styled.div`
  @media (max-width: 390px) {
    width: 90vw;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  justify-content: flex-start;

  gap: 22px;

  width: 369px;
  height: 320px;

  background-color: var(--grey-three);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  .head {
    background-color: var(--grey-two);
    color: var(--grey-zero);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 12px 20px;

    width: 100%;
    height: 60px;

    border-radius: 4px 4px 0px 0px;

    button {
      background-color: var(--grey-two);
      border-style: none;
      color: var(--grey-one);
    }
  }
`;
