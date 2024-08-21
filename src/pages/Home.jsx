import React from 'react';
import './Navbar.css';
import './Home.css';
import logo from '../assets/logo1.png';
import img1 from '../assets/img1.png';
import {Link} from 'react-router-dom';

function IrParaLogin() {
  window.location.href = '/Login';
}

function IrParaCadastro() {
  window.location.href = '/Cadastro';
}

const Home = () => {
  return (
    <div className="tela-home">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-buttons">
          <button onClick={IrParaLogin} className="botao-entrar">Entrar</button>
          <button onClick={IrParaCadastro} className="botao-cadastrar">Cadastrar</button>
        </div>
      </div>
      <div className='bem-vindo'>
        <h1>Bem-vindo(a) ao Suporte da ACSIV</h1>
        <img src={img1} alt="Img1" />
      </div>
      <div className='abaixo'>
        <h1>Teste</h1>
      </div>

    </div>
  );
};

export default Home;