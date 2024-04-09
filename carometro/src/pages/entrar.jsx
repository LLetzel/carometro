import { useState } from 'react';
import 'C:/Temp/react/carometro/carometro/src/App.css';
import Login from './login';

function Entrar() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="image-container">
        <img id="logosenai" src="https://www.precisaocortelaser.com.br/wp-content/uploads/2020/07/logo-senai-1.png" alt="SENAI logo" />
      </div>
      <div className="form-container">
        <Login></Login>
      </div>
    </div>
  );
}

export default Entrar;