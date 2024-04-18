import React from "react";
function AlunaPage(props) {
  const { nome, idade, curso, Turma } = props;

  return (
    <div>
      <h1>Informações da Aluna</h1>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Idade:</strong> {idade}</p>
      <p><strong>Curso:</strong> {curso}</p>
      <p><strong>Turma:</strong> {matricula}</p>
    </div>
  );
}

const aluno = {
  nome: 'Lucas Letzel',
  idade: 16,
  curso: 'Desenvolvimento de Sistemas',
  Turma: 'IDEV2'
};

function App() {
  return (
    <div>
      <AlunaPage
        nome={aluno.nome}
        idade={aluno.idade}
        curso={aluno.curso}
        Turma={aluno.matricula}
      />
    </div>
  );
}

export default App;
