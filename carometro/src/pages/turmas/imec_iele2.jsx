import { useState } from 'react';
import '/./Temp/react/projeto-carômetro/carometro/carometro/src/App.css';
// import '/Programações/projeto-carometro/carometro/carometro/src/App.css'
import Card from '../components/Card.jsx'
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 100 }, // Oculto, deslocado para cima por 50px
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Visível, sem deslocamento, transição suave
  
};
const animation = {
  duration: 1.5, // Duração da animação
  ease: 'easeInOut', // Curva de easing
  when: 'afterScroll', // Iniciar após a rolagem
};

function Imec_iele2() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="fundoalunos">
        <div className="tituloimec_iele2 ">
          <h1 className='tituloimec_iele2 '>IMEC/IELE2 </h1>
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <div className="linhas">
            <Card nome='Alexandre Deboletta' turma='IMEC/IELE2  - N° 1'></Card>
            <Card nome='Camilly Bianca' turma='IMEC/IELE2  - N° 2'></Card>
            <Card nome='Carol Romano' turma='IMEC/IELE2  - N° 3'></Card>
            <Card nome='Claudete Machado' turma='IMEC/IELE2  - N° 4'></Card>
          </div>
        </motion.div>


        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <div className="linhas">

            <Card nome='Eduarda Monteiro' turma='IMEC/IELE2  - N° 5'></Card>
            <Card nome='Enzo Bussi' turma='IMEC/IELE2  - N° 6'></Card>
            <Card nome='Felipe Loncarovich' turma='IMEC/IELE2  - N° 7'></Card>
            <Card nome='Gabriel De Oliveira' turma='IMEC/IELE2  - N° 8'></Card>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <div className="linhas">
            <Card nome='Gabriel Pires' turma='IMEC/IELE2  - N° 9'></Card>
            <Card nome='Gabrielle Quinquio' turma='IMEC/IELE2  - N° 10'></Card>
            <Card nome='Giovani Canella' turma='IMEC/IELE2  - N° 11'></Card>
            <Card nome='Guilherme Trevisan' turma='IMEC/IELE2  - N° 12'></Card>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <div className="linhas">
            <Card nome='Guilherme Ferraresi' turma='IMEC/IELE2  - N° 13'></Card>
            <Card nome='Henrique Bussi' turma='IMEC/IELE2  - N° 14'></Card>
            <Card nome='Henry Gabriel' turma='IMEC/IELE2  - N° 15'></Card>
            <Card nome='Isabela Manzano' turma='IMEC/IELE2  - N° 16'></Card>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <div className="linhas">
            <Card nome='Jhuan Medeiros' turma='IMEC/IELE2  - N° 17'></Card>
            <Card nome='Juan Miguel' turma='IMEC/IELE2  - N° 18'></Card>
            <Card nome='Kauan Flauzino' turma='IMEC/IELE2  - N° 19'></Card>
            <Card nome='Lucas Letzel' turma='IMEC/IELE2  - N° 20'></Card>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <div className="linhas">
            <Card nome='Lucas Martins' turma='IMEC/IELE2  - N° 21'></Card>
            <Card nome='Lucas Manzano' turma='IMEC/IELE2  - N° 22'></Card>
            <Card nome='Manuela Sotrate' turma='IMEC/IELE2  - N° 23'></Card>
            <Card nome='Mateus Silverio' turma='IMEC/IELE2  - N° 24'></Card>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <div className="linhas">
            <Card nome='Matheus Rodolpho' turma='IMEC/IELE2  - N° 25'></Card>
            <Card nome='Pedro Lima' turma='IMEC/IELE2  - N° 26'></Card>
            <Card nome='Pedro Henrique' turma='IMEC/IELE2  - N° 27'></Card>
            <Card nome='Tomas Dominguês' turma='IMEC/IELE2  - N° 28'></Card>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <div className="linhas">
            <Card nome='Vinicios Sulpicio' turma='IMEC/IELE2  - N° 29'></Card>
            <Card nome='Vitória Muniz' turma='IMEC/IELE2  - N° 30'></Card>
            <Card nome='Yasmim Caveriane' turma='IMEC/IELE2  - N° 31'></Card>
          </div>
        </motion.div>


      </div>

    </>
  );
}

export default Imec_iele2;