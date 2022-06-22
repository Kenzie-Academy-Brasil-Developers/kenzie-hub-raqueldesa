import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { CenterBody, CenterDiv, InputArea } from "./style";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Login({ autenticado, setAutenticado }) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório")

      .email("Formato de email inválido"),
    password: yup
      .string()
      .min(6, "Minimo 6 digitos")
      .required("Campo obrigatório"),
  });

  const history = useHistory();

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    api
      .post("sessions", data)
      .then((res) => {
        const { token } = res.data;

        localStorage.setItem("@KenzeHub:token", JSON.stringify(token));

        setAutenticado(true);
        return history.push("/home", { user_id: res.data.user.id });
      })
      .catch((err) => err);
  };

  return (
    <CenterBody>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Header />
        <CenterDiv>
          <h3>Login</h3>
          <InputArea>
            <label>Email</label>
            <input {...register("email")} placeholder="exemplo@gmail.com" />
          </InputArea>
          <InputArea>
            <label>Senha</label>
            <input {...register("password")} placeholder="Insira sua senha" />
          </InputArea>
          <Button
            type="submit"
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
            onClick={() => history.push("/register")}
          >
            Cadastre-se
          </Button>
        </CenterDiv>
      </form>
    </CenterBody>
  );
}

export default Login;
