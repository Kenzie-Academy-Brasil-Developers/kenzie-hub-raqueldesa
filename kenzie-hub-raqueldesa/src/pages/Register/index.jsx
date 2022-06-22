import { CenterBody, CenterDiv, InputArea } from "../Login/style";
import { Button } from "../../components/Button";
import Header from "../../components/Header";

function Register() {
  return (
    <>
      <CenterBody>
        <Header display="block" text="Voltar" />
        <form>
          <CenterDiv>
            <h3>Crie sua conta</h3>
            <p>Rapido e grátis, vamos nessa</p>
            <InputArea>
              <label>Nome</label>
              <input placeholder="Digite aqui seu nome" />
            </InputArea>
            <InputArea>
              <label>Email</label>
              <input placeholder="Digite aqui seu email" />
            </InputArea>
            <InputArea>
              <label>Senha</label>
              <input placeholder="Digite aqui sua senha" />
            </InputArea>
            <InputArea>
              <label>Confirmar Senha</label>
              <input placeholder="Digite novamente sua senha" />
            </InputArea>
            <InputArea>
              <label>Bio</label>
              <input placeholder="Fale sobre você" />
            </InputArea>
            <InputArea>
              <label>Contato</label>
              <input placeholder="Opção de contato" />
            </InputArea>
            <InputArea>
              <label>Selecionar módulo</label>
              <select>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro Módulo
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo Módulo
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro Módulo
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto Módulo
                </option>
              </select>
            </InputArea>

            <Button
              color="white"
              backgroundColor="var(--pink-disable)"
              hoverBackgroundColor="var(--pink-focus)"
            >
              Cadastrar
            </Button>
          </CenterDiv>
        </form>
      </CenterBody>
    </>
  );
}

export default Register;
