import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const deletar = () => {
    localStorage.removeItem("Dados");
  };

  const sair = () => {
    navigate("/");
  }

  return (
    <div>
      <button onClick={deletar}>Confirmar</button>
      <button onClick={sair}>Sair</button>
    </div>
  );
};

export default Home;
