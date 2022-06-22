import { useState } from "react";
import { SmallButton } from "../../components/Button";
import Header from "../../components/Header";
import Modal from "../../components/Modal/Modal";
import Tech from "../../components/Tech";

import { StyledContainer, StyledSection } from "./style";

function Home() {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      {isModal && <Modal setIsModal={setIsModal} />}
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
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
        </StyledContainer>
      </StyledSection>
    </>
  );
}

export default Home;
