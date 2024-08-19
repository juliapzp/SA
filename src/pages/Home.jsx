import React from 'react';
import './Navbar.css';
import './Home.css';
import logo from '../assets/logo1.png';
import img1 from '../assets/img1.png';

const Home = () => {
  return (
    <div className="tela-home">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-buttons">
          <button className="botao-entrar">Entrar</button>
          <button className="botao-cadastrar">Cadastrar</button>
        </div>
      </div>
      
      <div className='bem-vindo'>
        <h1>Bem-vindo(a) ao Suporte da ACSIV</h1>
        <img src={img1} alt="Img1" />
      </div>

    </div>
  );
};

export default Home;