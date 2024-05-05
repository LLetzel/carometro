
import { useState } from 'react';
import '../App.css';
import Form from './form';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50 }, // Oculto, deslocado para cima por 50px
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Visível, sem deslocamento, transição suave
};

function Login() {
  const [count, setCount] = useState(0);

  return (
    <div className="containerfundo">
    
    <div className="container">
      <div className="image-container">
        <img id="logosenai" src="https://www.precisaocortelaser.com.br/wp-content/uploads/2020/07/logo-senai-1.png" alt="SENAI logo" />
      </div>
      <motion.div className="form-container" variants={containerVariants} initial="hidden" animate="visible">
        <Form />
      </motion.div>
    </div>
    </div>
  );
}

export default Login;
