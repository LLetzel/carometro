import { useState } from 'react'; // Importa o hook useState do React para gerenciar estados
import './App.css'; // Importa a folha de estilo CSS da aplicação
import Home from './pages/home.jsx'; // Importa o componente Home
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa componentes de roteamento do React Router DOM
import Login  from "./pages/login.jsx";
import Idev2 from './pages/turmas/idev2.jsx';
import Cabecalho from './pages/Header.jsx';
import Footer from './pages/footer.jsx';
import Idev1 from './pages/turmas/Idev1.jsx';
import Imeciele2 from './pages/turmas/imec_iele2.jsx'
import AlunoPage from './pages/AlunoPrincipal.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Imec_iele2 from './pages/turmas/imec_iele2.jsx';

function App() {
  const [count, setCount] = useState(0); // Define um estado inicial "count" com valor 0, provavelmente não utilizado neste exemplo


  return (
    <>
      {localStorage.getItem('token') ? <>
        <div>
          <BrowserRouter>  {/* Cria um contexto de roteamento */}
            <Cabecalho></Cabecalho>
            <Routes>  {/* Define as rotas da aplicação */}
              <Route path="/" element={<Login />} /> {/* Rota raiz (/), renderiza o componente Entrar */}
              <Route path="/home" element={<Home />} />  {/* Rota para /home, renderiza o componente Home */}
              <Route path="/Idev2" element={< Idev2 />} /> 
              <Route path="/Idev1" element={<Idev1 />} /> 
              <Route path="/aluno" element={<AlunoPage/>} /> 
              <Route path="/imec_iele2" element={<Imec_iele2/>} />
              
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </div>
      </> : <>
        <BrowserRouter>  {/* Cria um contexto de roteamento */}
          <Routes>  {/* Define as rotas da aplicação */}
            <Route path="/login" element={<Login />} />  {/* Rota para /entrar (aparentemente desnecessária, pois igual à raiz) */}
          </Routes>
        </BrowserRouter>
      </>}
    </>
  );
}

export default App; // Exporta o componente App para ser utilizado em outros lugares
