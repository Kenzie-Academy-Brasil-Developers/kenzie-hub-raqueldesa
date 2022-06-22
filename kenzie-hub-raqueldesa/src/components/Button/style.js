import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 38.5px;
  font-size: 16px;
  font-weight: 500;

  border-style: none;
  border-radius: 4px;

  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    transition: 0.3s;
  }
`;
export const StyledSmallButton = styled.button`
  width: ${(props) => props.width || "70px"};
  height: ${(props) => props.height || "40px"};
  font-size: 12px;
  font-weight: 600;

  border-style: none;
  border-radius: 4px;

  color: var(--grey-zero);
  background-color: var(--grey-three);

  display: ${(props) => props.display || "none"};

  &:hover {
    background-color: var(--grey-two);
    transition: 0.3s;
  }
`;
