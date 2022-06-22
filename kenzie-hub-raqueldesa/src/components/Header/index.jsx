import { StyledHeader } from "./style";
import Logo from "../../assets/Logo.svg";

import { SmallButton } from "../Button/index";
import { useHistory } from "react-router-dom";

function Header({ text, ...rest }) {
  const history = useHistory();
  return (
    <>
      <StyledHeader {...rest}>
        <img src={Logo} alt="logo Kenzie Hub" />

        <SmallButton
          onClick={() => {
            localStorage.removeItem("@KenzeHub:token");
            history.push("/");
          }}
          {...rest}
        >
          {text}
        </SmallButton>
      </StyledHeader>
    </>
  );
}

export default Header;
