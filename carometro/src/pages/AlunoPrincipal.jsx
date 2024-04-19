import React from "react";
import '/Temp/react/carometro/carometro/src/App.css'

function AlunoPage() {
    return (

        <div className="containerfullAluno">
            <div className="fotoaluno">
            <img id="imagemaluno" src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="Foto aluno" />
            </div>
            <div className="informacoestotal">
            <div className="informações aluno">
                <p>Lucas Letzel</p>
            </div>
            <div className="informações aluno">
                <p>Desenvolvimento de Sistemas</p>
            </div>
            <div className="informações aluno">
                <p>Número - 20</p>
            </div>
            <div className="informações aluno">
                <p>16 Anos</p>
            </div>

            <label>Anotações sobre o Aluno:</label>
            <input id="anotacoes" type="text" />
            </div>
            
        </div>

    );
}

export default AlunoPage;