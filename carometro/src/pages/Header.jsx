import React, { useState } from 'react';
import LogoSenai from '../senai-logo.png';
import IconPerfil from './imagens/iconePessoa.png';

const email = localStorage.getItem('token');
function Cabecalho() {
  return (
    <header id='header'>
        <div>
        </div>

        <a href="./home" id='home-f5' style={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold', letterSpacing: '0.1em', color:'white', fontSize:'40px' }}>
          SENAI
        </a>

        <a href="/" id="home-entrar" style={{
  fontFamily: 'Roboto Condensed, sans-serif',
  fontWeight: 'bold',
  letterSpacing: '0.1em',
  color: 'white',
  fontSize: '20px',
}}>
  <img src={IconPerfil} id='iconperfil' alt="icon perfil" />
</a>
    </header>
  );
};

export default Cabecalho;
