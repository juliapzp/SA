import React, { useState } from 'react';
import '../css/Home.css';
import logo from '../../assets/logo1.png';
import img1 from '../../assets/img1.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="tela-home">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-buttons">
          <Link to="/Login">
            <button className="botao-entrar">Entrar</button>
          </Link>
          <Link to="/Cadastro">
            <button className="botao-cadastrar">
              <span className="gradient">Cadastrar</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="bem-vindo">
        <h1>Bem-vindo(a) ao Suporte da ACSIV</h1>
        <img src={img1} alt="Img1" />
      </div>
      <div className="abaixo">
        <button className="botao-duvida">
          <span className="gradient">Tire sua dúvida</span>
        </button>
        <h1 className="gradient">DÚVIDAS</h1>
        <div className='div-filtro-barra'>
          <div className="div-filtros">

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Área
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Área 1</a>
                <a className="dropdown-item" href="#">Área 2</a>
                <a className="dropdown-item" href="#">Área 3</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Status
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Respondido</a>
                <a className="dropdown-item" href="#">Não Respondido</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Data
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Mais Recente</a>
                <a className="dropdown-item" href="#">Mais Antigo</a>
              </div>
            </div>

          </div>
          <div className="div-barra">
            <span className="search-container">
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar..."
              />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </span>
          </div>
        </div>

        <div className="duvidas">
          <div className='duvida'>
            <h2 className="gradient">Exemplo</h2>
            <p>Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo</p>
          </div>

          <div className='duvida'>
            <h2 className="gradient">Exemplo</h2>
            <p>Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo Exemplo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;