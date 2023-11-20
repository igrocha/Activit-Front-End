import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logoSVGneon from '../../assets/teste.svg';
import { Link } from 'react-router-dom';


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
      <img src={logoSVGneon} alt="LogoNeon"></img>
      <span className="parkhub">ParkHub</span>
      <h2>Login</h2>
      <form>
        <input
          className="form-input"
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>

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
      <p className="cadastro">
        Ainda não possui cadastro? <Link to="/register">Cadastrar-se</Link>
      </p>
    </div>
  );
};

export default Login;
