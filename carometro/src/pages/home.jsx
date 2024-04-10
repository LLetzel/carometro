import { useState } from 'react';
import 'C:/Temp/react/carometro/carometro/src/App.css';
import CustomNavbar from './navbar.jsx';
import CarouselCar from './carousel.jsx';


function Home() {
  return (
    <>
    <CustomNavbar /> {/* Renderiza a barra de navegação personalizada */}
    <CarouselCar /> {/* Renderiza o carrossel de imagens */}
  </>
  );
}

export default Home;
