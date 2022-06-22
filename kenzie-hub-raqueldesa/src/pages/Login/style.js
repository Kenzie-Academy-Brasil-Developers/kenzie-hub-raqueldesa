import styled from "styled-components";

export const CenterDiv = styled.div`
  @media (max-width: 390px) {
    width: 90vw;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 369px;

  gap: 20px;
  background-color: ${(props) => props.backgroundColor || "var(--grey-three)"};

  padding: 22px;
  border-radius: 4px;

  p {
    color: var(--grey-one);
    font-size: 12px;
  }
`;

export const CenterBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 700px;
  width: 100vw;

  overflow-y: scroll;
  background-color: ${(props) =>
    props.backgroundColor || "rgba(18, 18, 20, 0.0)"};

  position: ${(props) => props.position || "relative"};
  top: 0;
  left: 0;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  width: 100%;

  label {
    color: var(--grey-zero);
    font-size: 14px;
  }

  input,
  select {
    background: var(--grey-two);
    color: var(--grey-zero);

    border-style: none;
    border-radius: 4px;

    width: 100%;
    height: 38.5px;

    padding-left: 10px;
    font-size: 16px;

    ::placeholder {
      color: var(--grey-one);
    }
    &:focus {
      border: 1px solid var(--grey-zero);
    }
  }
`;
