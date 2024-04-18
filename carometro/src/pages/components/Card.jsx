import React from "react";

function Card({nome, turma}) {
    return (
        <>
            <div className="cartaoaluno">
                <img id='fotoaluno' src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="" />
                <div className="informacoes">
                    <p className="letras">{nome}</p>
                </div>
                <div className="informacoes">
                    <p className="letras">{turma}</p>
                </div>
                <button id='ver-aluno'>Ver aluno</button>
            </div>
        </>
    )
}  

export default Card;