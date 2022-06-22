import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { SmallButton } from "../../components/Button";
import Header from "../../components/Header";
import Modal from "../../components/Modal/Modal";
import Tech from "../../components/Tech";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import { StyledContainer, StyledSection } from "./style";

function Home({ autenticado }) {
  const [techs, setTechs] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzeHub:token")) || ""
  );

  const history = useHistory();

  const userId = history.location.state.user_id;

  const [isModal, setIsModal] = useState(false);

  function loadTechs() {
    api
      .get(`/users/${userId}`)
      .then((res) => {
        setTechs(res.data.techs);
      })
      .catch((err) => err);
  }

  useEffect(() => {
    loadTechs();
  }, []);

  if (!autenticado) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {isModal && (
        <Modal setIsModal={setIsModal} token={token} loadTechs={loadTechs} />
      )}
      <Header display="block" text="Sair" headerWidth="100vw" />
      <StyledSection>
        <h1>Olá,Samuel Leão</h1>

        <p>Primeiro módulo Introdução ao Frontend</p>
      </StyledSection>
      <StyledSection height="32px">
        <h2>Tecnologias</h2>

        <SmallButton
          onClick={() => setIsModal(true)}
          height="32px"
          width="32px"
          display="block"
        >
          +
        </SmallButton>
      </StyledSection>
      <StyledSection height="auto">
        <StyledContainer>
          {techs?.map((tech) => {
            return (
              <Tech
                key={tech.id}
                id={tech.id}
                title={tech.title}
                status={tech.status}
                loadTechs={loadTechs}
                token={token}
              />
            );
          })}
        </StyledContainer>
      </StyledSection>
    </>
  );
}

export default Home;
