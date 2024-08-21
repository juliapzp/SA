import React from 'react';
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;