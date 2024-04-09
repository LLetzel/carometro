import { useState } from 'react';
import './App.css';
import Login from './pages/login';
import Entrar from './pages/entrar.jsx';
import Home from './pages/home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Entrar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/entrar" element={<Entrar />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App