import React, { useState } from 'react';
import LogoSenai from '../senai-logo.png';

const email = localStorage.getItem('token');
function Cabecalho() {
  return (
    <header id='header'>
        <div>
        </div>

        <a href="./home" id='home-f5' style={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold', letterSpacing: '0.1em', color:'white', fontSize:'40px' }}>
          SENAI
        </a>

        <a href="./login" id="home-entrar" class="animated-button" style={{
  fontFamily: 'Roboto Condensed, sans-serif',
  fontWeight: 'bold',
  letterSpacing: '0.1em',
  color: 'white',
  fontSize: '20px',
  padding: '4px 15px',
}}>
  {email}
</a>
    </header>
  );
};

export default Cabecalho;
