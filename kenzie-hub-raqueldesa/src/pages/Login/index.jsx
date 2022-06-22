import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { CenterBody, CenterDiv, InputArea } from "./style";

function Login() {
  return (
    <CenterBody>
      <form>
        <Header />
        <CenterDiv>
          <h3>Login</h3>
          <InputArea>
            <label>Email</label>
            <input placeholder="exemplo@gmail.com" />
          </InputArea>
          <InputArea>
            <label>Senha</label>
            <input placeholder="Insira sua senha" />
          </InputArea>
          <Button
            color="white"
            backgroundColor="var(--pink-primary)"
            hoverBackgroundColor="var(--pink-focus)"
          >
            Entrar
          </Button>
          <p>Ainda não possui uma conta?</p>
          <Button
            color="white"
            backgroundColor="var(--grey-one)"
            hoverBackgroundColor="var(--grey-two)"
          >
            Cadastre-se
          </Button>
        </CenterDiv>
      </form>
    </CenterBody>
  );
}

export default Login;
