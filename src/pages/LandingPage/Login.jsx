import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    if (username === '' || password === '') {
      alert('Por favor, preencha todos os campos.');
    } else {
      console.log(`Username: ${username}, Password: ${password}`);
      navigate('/home'); // corrigir o nome da próxima página
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input
          className="form-input"
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p></p>

        <input
          className="form-input"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleLogin();
            }
          }}
        />
        <div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
