
import { useState } from 'react';   
import '/./Temp/react/projeto-carômetro/carometro/carometro/src/App.css';
import Card from '../components/Card.jsx'

function Idev2() {
    const [count, setCount] = useState(0)
  
    return (
    <>
      <div className="fundoalunos">
        <div className="tituloidev2">
       <h1 className='tituloIDEV2'>IDEV2</h1>
       </div>
       <div className="linhas">
       <Card nome='Alexandre Deboletta' turma='IDEV2 - N° 1'></Card>
       <Card nome='Camilly Bianca' turma='IDEV2 - N° 2'></Card> 
       <Card nome='Carol Romano' turma='IDEV2 - N° 3'></Card>
       <Card nome='Claudete Machado' turma='IDEV2 - N° 4'></Card>
        </div>


        <div className="linhas">
        
        <Card nome='Eduarda Monteiro' turma='IDEV2 - N° 5'></Card>
        <Card nome='Enzo Bussi' turma='IDEV2 - N° 6'></Card>
        <Card nome='Felipe Loncarovich' turma='IDEV2 - N° 7'></Card>
        <Card nome='Gabriel De Oliveira' turma='IDEV2 - N° 8'></Card>
        </div>

        <div className="linhas">
        <Card nome='Gabriel Pires' turma='IDEV2 - N° 9'></Card>
        <Card nome='Gabrielle Quinquio' turma='IDEV2 - N° 10'></Card>
        <Card nome='Giovani Canella' turma='IDEV2 - N° 11'></Card>
        <Card nome='Guilherme Trevisan' turma='IDEV2 - N° 12'></Card>
        </div>

        <div className="linhas">
        <Card nome='Guilherme Ferraresi' turma='IDEV2 - N° 13'></Card>
        <Card nome='Henrique Bussi' turma='IDEV2 - N° 14'></Card>
        <Card nome='Henry Gabriel' turma='IDEV2 - N° 15'></Card>
        <Card nome='Isabela Manzano' turma='IDEV2 - N° 16'></Card>
        </div>

        <div className="linhas">
        <Card nome='Jhuan Medeiros' turma='IDEV2 - N° 17'></Card>
        <Card nome='Juan Miguel' turma='IDEV2 - N° 18'></Card>
        <Card nome='Kauan Flauzino' turma='IDEV2 - N° 19'></Card>
        <Card nome='Lucas Letzel' turma='IDEV2 - N° 20'></Card>
        </div>

        <div className="linhas">
        <Card nome='Lucas Martins' turma='IDEV2 - N° 21'></Card>
        <Card nome='Lucas Manzano' turma='IDEV2 - N° 22'></Card>
        <Card nome='Manuela Sotrate' turma='IDEV2 - N° 23'></Card>
        <Card nome='Mateus Silverio' turma='IDEV2 - N° 24'></Card>
        </div>

        <div className="linhas">
        <Card nome='Matheus Rodolpho' turma='IDEV2 - N° 25'></Card>
        <Card nome='Pedro Lima' turma='IDEV2 - N° 26'></Card>
        <Card nome='Pedro Henrique' turma='IDEV2 - N° 27'></Card>
        <Card nome='Tomas Dominguês' turma='IDEV2 - N° 28'></Card>
        </div>

        <div className="linhas">
        <Card nome='Vinicios Sulpicio' turma='IDEV2 - N° 29'></Card>
        <Card nome='Vitória Muniz' turma='IDEV2 - N° 30'></Card>
        <Card nome='Yasmim Caveriane' turma='IDEV2 - N° 31'></Card>
        </div>

      </div>
      
      </>
    );
  }
  
  export default Idev2;