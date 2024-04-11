import { useState } from 'react';
import 'C:/Temp/react/carometro/carometro/src/App.css';
import CarouselCar from './carousel.jsx';
// import Carousel from 'react-bootstrap/Carousel'; // Importa o componente Carousel do React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function Teste() { 
  return (
    <>
    
    <div id='carrossel'>
    <Carousel data-bs-theme="dark"> {/* Define o tema do carrossel como "dark" */}
      <Carousel.Item> {/* Define um item do carrossel */}
        <img
          className="d-block"  
          src='https://profissionalizar.com/wp-content/uploads/2021/03/posts-carrossel-do-Instagram.jpg'
          alt="IDEV2" 
        />
        <Carousel.Caption> {/* Legenda do item do carrossel */}
          <h5>IDEV2</h5>  {/* Título da legenda */}
          <p>Segundo ano - Desenvolvimento de Sistemas</p> {/* Descrição da legenda */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> {/* Define outro item do carrossel (repetir estrutura para itens adicionais) */}
        <img
          className="d-block "
          src="https://img.freepik.com/vetores-gratis/modelos-de-carrossel-do-instagram_52683-51656.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  </>
  );
}

export default Teste;
