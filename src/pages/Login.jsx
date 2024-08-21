import React from 'react';
import './Navbar.css';
import './Login.css';
import logo from '../assets/logo1.png';
import img1 from '../assets/img1.png';
import {Link} from 'react-router-dom';

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
        <div className='cliente'>
        <h1 className='gradient'>Cliente</h1>
        <button  className="botao-escolha">Entrar Cliente</button>
        </div>

        <div className='admnistrador'>
        <h1 className='gradient'>Administrador</h1>
        <button  className="botao-escolha">Entrar Administrador</button>
        </div>
      </div>

    </div>
  );
};

export default Login;