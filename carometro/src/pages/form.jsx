import { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar a lógica de envio do formulário aqui
    console.log(`Email: ${email}, Senha: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>BEM-VINDO</h1>
      <p>O SENAI apresenta o Carômetro, uma ferramenta digital que mostra dados, ocorrências, características, habilidades, interesses e motivações de cada aluno, com uma interface interativa e prática.</p>
      <label htmlFor="email">Email:</label> <br />
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <label htmlFor="password">Senha:</label> <br />
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value)

        }}
      />
      <br />
      <button href="" type='reset'>Voltar</button>
      <button onClick={() => {
        window.open(
          './home',
          '_blank'
        )
        localStorage.setItem('token', email)
      }} type='submit'>Cadastrar</button>
    </form>


  );
}

export default Form;