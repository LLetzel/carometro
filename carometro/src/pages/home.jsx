import { useState } from 'react';   
import '../App.css';
import CarouselCar from './carousel.jsx';
import Cabecalho from './Header.jsx';
// import { ThumbUp } from 'react-icons/fa'; // Importando ícone da biblioteca


function Home() { //npm install @fortawesome/fontawesome-free para instalar a biblioteca Fortawesome(para icon)

  return (

    
    
    <>
    
    {/* <Cabecalho></Cabecalho> */}
    <div className="containerhomefull">
        <button onClick={() => window.open(
              'https://classroom.google.com/u/1/c/NTQyMDY3MzYxOTUx',
              '_blank'
            )} id="classroom">
        <img src="https://w7.pngwing.com/pngs/640/323/png-transparent-computer-icons-google-classroom-others-text-black-icon-download-thumbnail.png" 
        alt="Icon Classroom" 
        id='iconclassroom' />
        CLASSROOM
        </button>
    <div className="containerhome">
    <CarouselCar></CarouselCar>
    {/* <button id='visualizarturma' onClick={() => {
        window.open(
          '/Idev2',
          '_self'
        )}
      }
 
     >Visualizar turma</button> */}
    </div>
    </div>
  </>
  );
}

export default Home;
