import React from "react";
import '../App.css';
import ModeloAluno from  './imagens/modelo-aluno.jpeg';

function AlunoPage() {
    return (

        <div className="containerfullAluno">
            <div className="fotoaluno">
            <img id="imagemaluno" src={ModeloAluno} alt="Foto aluno" />
            </div>
            <div className="informacoestotal">
            <div className="informaçõesaluno">
                <p>Lucas Letzel</p>
            </div>
            <div className="informaçõesaluno">
                <p>Desenvolvimento de Sistemas</p>
            </div>
            <div className="informaçõesaluno">
                <p>Número - 20</p>
            </div>
            <div className="informaçõesaluno">
                <p>16 Anos</p>
            </div>

            
            <div className="caixadetexto">
            <label>Anotações sobre o Aluno(a):
            </label>
            <textarea name="anotações" id="" cols="35" rows="4"></textarea>
            
            </div>
            </div>
            
        </div>

    );
}

export default AlunoPage;