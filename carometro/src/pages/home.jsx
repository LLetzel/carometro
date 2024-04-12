import { useState } from 'react';   
import '../App.css';
import CarouselCar from './carousel.jsx';
import Cabecalho from './Header.jsx';


function Home() {
  return (
    
    <>
    <Cabecalho></Cabecalho>
    <div className="containerhome">
    <CarouselCar></CarouselCar>
    <button id='visualizarturma'>Visualizar turma</button>
    </div>
  </>
  );
}

export default Home;
