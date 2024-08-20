import React from 'react';
import { Link } from 'react-router-dom';

function SeuComponente() {
  return (
    <div className="nav-buttons">
      <Link to="/login">
        <button className="botao-entrar">Entrar</button>
      </Link>
      <Link to="/cadastrar">
        <button className="botao-cadastrar">Cadastrar</button>
      </Link>
    </div>
  );
}

export default SeuComponente;
