import { useState } from 'react';   
import 'C:/Temp/react/carometro/carometro/src/App.css';
import CarouselCar from './carousel.jsx';


function Home() {
  return (
    
    <>
    
    <div className="containerhome">
    <CarouselCar></CarouselCar>
    <button id='visualizarturma' >Visualizar turma</button>
    </div>
  </>
  );
}

export default Home;
