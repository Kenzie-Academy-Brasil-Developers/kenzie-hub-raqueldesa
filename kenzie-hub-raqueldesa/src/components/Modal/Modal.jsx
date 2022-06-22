import { useForm } from "react-hook-form";
import { CenterBody, CenterDiv, InputArea } from "../../pages/Login/style";
import api from "../../services/api";
import { Button } from "../Button";
import { StyledModal } from "./style";

function Modal({ setIsModal, token, loadTechs }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(tech) {
    api
      .post(
        "/users/techs",
        {
          title: tech.title,
          status: tech.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        loadTechs();
        setIsModal(false);
      });
  }

  return (
    <CenterBody position="fixed" backgroundColor="rgba(18, 18, 20, 0.9)">
      <StyledModal>
        <div className="head">
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={() => setIsModal(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CenterDiv>
            <InputArea>
              <label>Nome</label>
              <input placeholder="ex: TypeScript" {...register("title")} />
            </InputArea>
            <InputArea>
              <label>Selecionar status</label>
              <select {...register("status")}>
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </InputArea>
            <Button
              type="submit"
              color="white"
              backgroundColor="var(--pink-primary)"
              hoverBackgroundColor="var(--pink-focus)"
            >
              Cadastrar Tecnologia
            </Button>
          </CenterDiv>
        </form>
      </StyledModal>
    </CenterBody>
  );
}

export default Modal;
