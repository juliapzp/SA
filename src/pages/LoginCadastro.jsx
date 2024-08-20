import React from 'react';
import './Navbar.css';
import './LoginCadastro.css';
import logo from '../assets/logo1.png';

function LoginCadastro() {
  return (
    <div className="tela-LoginCadastro">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>


        <div className="nav-buttons">
          <button className="botao-entrar">Entrar</button>
          <button className="botao-cadastrar">Cadastrar</button>
        </div>

        
      </div>
      
      <div className='tela-cinza'>
        <h1>Escolha seu Perfil</h1>
        <img src={img1} alt="Img1" />
      </div>

    </div>
  );
};

export default LoginCadastro;