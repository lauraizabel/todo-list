import React from "react";

import { Container, ContainerBody } from "./styles";

import Header from "../../components/Header";
import { ReactComponent as SVGBackground } from "../../assets/background-home.svg";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <ContainerBody>
        <div className="texts">
          <h3>
            To-do List, a melhor forma de você e sua equipe organizarem suas
            tarefas.
          </h3>
          <div className="tab" />
          <h4>Crie. Delete. Edite. Conclua.</h4>
        </div>
        <SVGBackground />
      </ContainerBody>
    </Container>
  );
};

export default Home;
