import Carousel from 'react-bootstrap/Carousel'; // Importa o componente Carousel do React Bootstrap
import { useState } from 'react';
import '../App.css'
import IDEV2 from './imagens/idev2.jpeg';
import IDEV1 from './imagens/idev1.jpeg';
// import Carousel from 'react-bootstrap/Carousel'; // Importa o componente Carousel do React Bootstrap

// Componente CarouselCar para renderizar um carrossel simples na Tela Home
function CarouselCar() {
  const [images] = useState([
    {
      src: IDEV2,
      alt: 'IDEV2',
    },
    {
      src: IDEV1,
      alt: 'IDEV1',
    },
    {
      src: 'data:image/jpeg;base64,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',
      alt: 'IMEC/IELE2',
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
                style={{ height: '400px', width: '800px', borderRadius: '40px' }}
                src={image.src}
                alt={image.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="botoescarousel">
          <button id='visualizarturma' onClick={() => {
            window.open(
              '/Idev2',
              '_self'
            )
          }
          }
          >IDEV2</button>
          <button id='visualizarturma' onClick={() => {
            window.open(
              '/Idev1',
              '_self'
            )
          }
          }
          >IDEV1</button>
          <button id='visualizarturma' onClick={() => {
            window.open(
              '/imec_iele2',
              '_self'
            )
          }
          }
          >IMEC/IELE2</button>
        </div>
      </div>
    </>
  );
}

export default CarouselCar; // Exporta o componente CarouselCar para uso em outros lugares //
