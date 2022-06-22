import { CenterBody, CenterDiv, InputArea } from "../../pages/Login/style";
import { Button } from "../Button";
import { StyledModal } from "./style";

function Modal({ setIsModal }) {
  return (
    <CenterBody position="fixed" backgroundColor="rgba(18, 18, 20, 0.9)">
      <StyledModal>
        <div className="head">
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={() => setIsModal(false)}>X</button>
        </div>
        <CenterDiv>
          <InputArea>
            <label>Nome</label>
            <input placeholder="exemplo@gmail.com" />
          </InputArea>
          <InputArea>
            <label>Selecionar status</label>
            <select>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
          </InputArea>
          <Button
            color="white"
            backgroundColor="var(--pink-primary)"
            hoverBackgroundColor="var(--pink-focus)"
          >
            Entrar
          </Button>
        </CenterDiv>
      </StyledModal>
    </CenterBody>
  );
}

export default Modal;
