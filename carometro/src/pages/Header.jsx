import React from 'react';
import LogoSenai from '../senai-logo.png';

function Cabecalho() {
  return (
    <header id='header'>
        <div>
        </div>

        <a href="./home" style={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold', letterSpacing: '0.1em', color:'white', fontSize:'40px' }}>
          SENAI
        </a>

        {/* <a href="./login" id='home-entrar' style={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold', letterSpacing: '0.1em', color:'white', fontSize:'20px' ,backgroundColor:'pink' }}>
          Entrar
        </a> */}
        <a href="./login" id="home-entrar" class="animated-button" style={{
  fontFamily: 'Roboto Condensed, sans-serif',
  fontWeight: 'bold',
  letterSpacing: '0.1em',
  color: 'white',
  fontSize: '20px',
  backgroundColor: 'red',
  padding: '4px 15px',
}}>
  Entrar
</a>
    </header>
  );
};

export default Cabecalho;
