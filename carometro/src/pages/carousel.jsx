import Carousel from 'react-bootstrap/Carousel'; // Importa o componente Carousel do React Bootstrap
import { useState } from 'react';
import 'C:/Temp/react/carometro/carometro/src/App.css';
// import Carousel from 'react-bootstrap/Carousel'; // Importa o componente Carousel do React Bootstrap

// Componente CarouselCar para renderizar um carrossel simples na Tela Home
function CarouselCar() {
  const [images] = useState([
    {
      src: 'https://img.freepik.com/vetores-gratis/modelos-de-carrossel-do-instagram_52683-51656.jpg',
      alt: 'IDEV2',
    },
    {
      src: 'https://img.freepik.com/vetores-gratis/modelos-de-carrossel-do-instagram_52683-51656.jpg',
      alt: 'Imagem 2',
    },
  ]);
  return (
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
    </div>
  );
}

export default CarouselCar; // Exporta o componente CarouselCar para uso em outros lugares //
