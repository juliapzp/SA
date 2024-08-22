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
        <a href="/Home">
        <img  src={logo} alt="logo" />
        </a>
        </div>
        <div className="nav-buttons">
          <button onClick={IrParaLogin} className="botao-entrar">Entrar</button>
          <button onClick={IrParaCadastro} className="botao-cadastrar"><span className='gradient'>Cadastrar</span></button>
        </div>
      </div>
      <div className='bem-vindo'>
        <h1>Bem-vindo(a) ao Suporte da ACSIV</h1>
        <img  src={img1} alt="Img1"/>
      </div>
      <div className='abaixo'>
        <button className='botao-duvida'>
          <span className='gradient'>Tire sua dúvida</span>
          </button>
        <h1 className='gradient'>DÚVIDAS</h1>
        <div className='div-filtros'>

        </div>
        <div className='div-barra'>

        </div>
      </div>

    </div>
  );
};

export default Home;