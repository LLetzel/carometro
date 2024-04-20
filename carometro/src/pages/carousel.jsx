import Carousel from 'react-bootstrap/Carousel'; // Importa o componente Carousel do React Bootstrap
import { useState } from 'react';
import '../App.css'
import IDEV2 from './imagens/idev2.jpeg';
// import Carousel from 'react-bootstrap/Carousel'; // Importa o componente Carousel do React Bootstrap

// Componente CarouselCar para renderizar um carrossel simples na Tela Home
function CarouselCar() {
  const [images] = useState([
    {
      src: IDEV2,
      alt: 'IDEV2',
    },
    {
      src: 'https://img.freepik.com/vetores-gratis/modelos-de-carrossel-do-instagram_52683-51656.jpg',
      alt: 'IDEV1',
    },
  ]);
  return (
    <>
    <div className='carouselhome'>
      <Carousel>
        {images.map((image) => (
          <Carousel.Item key={image.src}>
            <img
              id='IDEVs'
              style={{ height: '400px', width: '800px', borderRadius: '40px'}}
              src={image.src}
              alt={image.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel> 
      <button id='visualizarturma' onClick={() => {
        window.open(
          '/Idev2',
          '_self'
        )}
      }
     >Visualizar turma</button>
    </div>
    </>
  );
}

export default CarouselCar; // Exporta o componente CarouselCar para uso em outros lugares //
