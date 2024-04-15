import Cabecalho from './Header.jsx';
import { useState } from 'react';   
import '../App.css';

function MenuIdev2() {
    const [count, setCount] = useState(0)
  
    return (
    <>
      <div className="fundoalunos">
        <div className="tituloidev2">
       <h1>IDEV2</h1>
       </div>
       <div className="linha1">
        <div className="cartaoaluno">

        </div>
        <div className="cartaoaluno">
          
        </div>
        <div className="cartaoaluno">
          
        </div>
        <div className="cartaoaluno">
          
        </div>
        </div>
      </div>
      
      </>
    );
  }
  
  export default MenuIdev2;