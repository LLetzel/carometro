import { useState } from 'react';
import 'C:/Temp/react/carometro/carometro/src/App.css';
import CustomNavbar from './navbar.jsx';
import CarouselCar from './carousel.jsx';
import Carousel from 'react-bootstrap/Carousel'; // Importa o componente Carousel do React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';



function Teste() {
  return (
    <>
    <Carousel data-bs-theme="dark"> {/* Define o tema do carrossel como "dark" */}
      <Carousel.Item> {/* Define um item do carrossel */}
        <img
          className="d-block w-100"  
          src='./idev2.jpeg'
          alt="IDEV2" 
        />
        <Carousel.Caption> {/* Legenda do item do carrossel */}
          <h5>IDEV2</h5>  {/* Título da legenda */}
          <p>Segundo ano - Desenvolvimento de Sistemas</p> {/* Descrição da legenda */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> {/* Define outro item do carrossel (repetir estrutura para itens adicionais) */}
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> {/* ... (repetir estrutura para itens adicionais) */}
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  );
}

export default Teste;
