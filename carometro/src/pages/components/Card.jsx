import React, { useState } from 'react';

const Card = ({ nome, turma }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <div className="cartaoaluno">
        {/* Image that acts as a button-like input */}
        <label htmlFor="fotoaluno-input">
          <img
            src={selectedFile ? URL.createObjectURL(selectedFile) : 'https://cdn-icons-png.flaticon.com/512/17/17004.png'}
            alt="Foto do Aluno"
            id="fotoaluno"
            style={{ cursor: 'pointer' }} // Optional: Set cursor to pointer on hover
          />
        </label>

        <input type="file" id="fotoaluno-input" onChange={handleImageChange} hidden />

        <div className="informacoes">
          <p className="letras">{nome}</p>
        </div>
        <div className="informacoes">
          <p className="letras">{turma}</p>
        </div>
        <button id="ver-aluno"
        onClick={() =>
          window.open (
          '/aluno',
          '_self'
        )
        }
        >Ver Aluno</button>
      </div>
    </>
  );
};

export default Card;