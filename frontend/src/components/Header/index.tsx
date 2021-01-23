import React from "react";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <h1>To-do List</h1>
      <div className="buttons">
        <button>Cadastrar</button>
        <button>Entrar</button>
      </div>
    </Container>
  );
};

export default Header;
