import { CenterBody, CenterDiv, InputArea } from "../Login/style";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";
import { useHistory } from "react-router-dom";

function Register() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .required("Campo obrigatório")

      .email("Formato de email inválido"),
    password: yup.string().min(6, "Minimo 6 digitos"),
    password_confirm: yup
      .string()
      .required("Campo obrigatório")

      .oneOf([yup.ref("password")], "Senhas diferentes"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const history = useHistory();

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const user = { name, email, password, bio, contact, course_module };

    api
      .post("users", user)
      .then((res) => {
        return history.push("/");
      })
      .catch((err) => err);
  };

  return (
    <>
      <CenterBody>
        <Header display="block" text="Voltar" />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <CenterDiv>
            <h3>Crie sua conta</h3>
            <p>Rapido e grátis, vamos nessa</p>
            <InputArea>
              <label>Nome</label>
              <input placeholder="Digite aqui seu nome" {...register("name")} />
            </InputArea>
            <InputArea>
              <label>Email</label>
              <input
                type="required"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
            </InputArea>
            <InputArea>
              <label>Senha</label>
              <input
                type="required"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
            </InputArea>
            <InputArea>
              <label>Confirmar Senha</label>
              <input
                type="required"
                placeholder="Digite novamente sua senha"
                {...register("password_confirm")}
              />
            </InputArea>
            <InputArea>
              <label>Bio</label>
              <input
                type="required"
                placeholder="Fale sobre você"
                {...register("bio")}
              />
            </InputArea>
            <InputArea>
              <label>Contato</label>
              <input
                type="required"
                placeholder="Opção de contato"
                {...register("contact")}
              />
            </InputArea>
            <InputArea>
              <label>Selecionar módulo</label>
              <select {...register("course_module")}>
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
              type="submit"
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
