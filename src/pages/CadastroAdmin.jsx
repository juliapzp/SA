import React from 'react';
import './Navbar.css';
import './Cadastro.css';
import logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';


function IrParaLogin() {
    window.location.href = '/Login';
}

function IrParaCadastro() {
    window.location.href = '/Cadastro';
}


const CadastroAdmin = () => {
    return (
        <div className="tela-cadastroadmin">
            <div className="navbar">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="nav-buttons">
                    <button onClick={IrParaLogin} className="botao-entrar">Entrar</button>
                    <button onClick={IrParaCadastro} className="botao-cadastrar"><span className='gradient'>Cadastrar</span></button>
                </div>
            </div>
        </div>
    );
};

export default CadastroAdmin;