import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginCadastro from './pages/LoginCadastro.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginCadastro />} />
        <Route path="/cadastrar" element={<LoginCadastro />} />
      </Routes>
    </Router>
  );
}

export default App;