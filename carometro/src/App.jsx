import { useState } from 'react'; // Importa o hook useState do React para gerenciar estados
import './App.css'; // Importa a folha de estilo CSS da aplicação
// import Entrar from './pages/entrar.jsx'; // Importa o componente Entrar
import Home from './pages/home.jsx'; // Importa o componente Home
import Teste from './pages/teste.jsx';
import CarouselCar from './pages/carousel.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa componentes de roteamento do React Router DOM
import Login from './pages/login.jsx';

function App() {
  const [count, setCount] = useState(0); // Define um estado inicial "count" com valor 0, provavelmente não utilizado neste exemplo

  return (
    <>  {/* Fragmento para encapsular elementos */}
      <div>
        <BrowserRouter>  {/* Cria um contexto de roteamento */}
          <Routes>  {/* Define as rotas da aplicação */}
            <Route path="/" element={<Login />} /> {/* Rota raiz (/), renderiza o componente Entrar */}
            <Route path="/home" element={<Home />} />  {/* Rota para /home, renderiza o componente Home */}
            <Route path="/login" element={<Login />} />  {/* Rota para /entrar (aparentemente desnecessária, pois igual à raiz) */}
            <Route path="/teste" element={<Teste />} />  {/* Rota para /entrar (aparentemente desnecessária, pois igual à raiz) */}
            <Route path="/carousel" element={<CarouselCar />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App; // Exporta o componente App para ser utilizado em outros lugares
