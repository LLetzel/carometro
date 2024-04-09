import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar a lógica de envio do formulário aqui
    console.log(`Email: ${email}, Senha: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>BEM-VINDO</h1>
      <p>Aqui está o Carômetro do SENAI, onde exploraremos sua personalidade e competências com tecnologia avançada. Prepare-se para descobrir seu potencial de crescimento e desenvolvimento. Seja bem-vindo à jornada de autoconhecimento guiada pelos princípios do SENAI</p>
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
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;