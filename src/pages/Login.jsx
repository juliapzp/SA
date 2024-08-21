import React from 'react';
import './Navbar.css';
import './Login.css';
import logo from '../assets/logo1.png';
import profile from '../assets/profile.png';
import { Link } from 'react-router-dom';

function IrParaLogin() {
  window.location.href = '/Login';
}

function IrParaCadastro() {
  window.location.href = '/Cadastro';
}

const Login = () => {
  return (
    <div className="tela-login">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-buttons">
          <button onClick={IrParaLogin} className="botao-entrar">Entrar</button>
          <button onClick={IrParaCadastro} className="botao-cadastrar">Cadastrar</button>
        </div>
      </div>
      <div className='escolha-login'>
        <h1 className='gradient'>Escolha seu Perfil:</h1>
        <div className='divs-escolha'>
          <div className='cliente'>
            <img className='profile' src={profile} alt="Profile" />
            <h1 className='gradient'>Cliente</h1>
            <button className="botao-escolha">Entrar Cliente</button>
          </div>

          <div className='administrador'>
            <img className='profile' src={profile} alt="Profile" />
            <h1 className='gradient'>Administrador</h1>
            <button className="botao-escolha">Entrar Administrador</button>
          </div>
        </div>


      </div>

    </div>
  );
};

export default Login;