import React from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import LoginCliente from './pages/LoginCliente.jsx';
import LoginAdmin from './pages/LoginAdmin.jsx';
import CadastroCliente from './pages/CadastroCliente.jsx';
import CadastroAdmin from './pages/CadastroAdmin.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/LoginCliente" element={<LoginCliente />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/CadastroCliente" element={<CadastroCliente />} />
        <Route path="/CadastroAdmin" element={<CadastroAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;