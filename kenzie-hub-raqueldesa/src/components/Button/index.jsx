import { StyledButton, StyledSmallButton } from "./style";

export function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
export function SmallButton({ children, ...rest }) {
  return <StyledSmallButton {...rest}>{children}</StyledSmallButton>;
}
