import { StyledHeader } from "./style";
import Logo from "../../assets/Logo.svg";

import { SmallButton } from "../Button/index";

function Header({ text, ...rest }) {
  return (
    <>
      <StyledHeader {...rest}>
        <img src={Logo} alt="logo Kenzie Hub" />

        <SmallButton {...rest}>{text}</SmallButton>
      </StyledHeader>
    </>
  );
}

export default Header;
