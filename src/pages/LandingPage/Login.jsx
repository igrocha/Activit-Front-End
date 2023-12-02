import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoSVGneon from '../../assets/teste.svg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('user');
  const navigate = useNavigate();

  function handleLogin() {
    if (username === '' || password === '') {
      alert('Por favor, preencha todos os campos.');
    } else {
      console.log(
        `Username: ${username}, Password: ${password}, Type: ${loginType}`
      );

      if (loginType === 'user') {
        navigate('/vaga');
      } else if (loginType === 'company') {
        navigate('/'); // atualizar rota
      }
    }
  }

  return (
    <div className="login-container">
      <img src={logoSVGneon} alt="LogoNeon"></img>
      <span className="parkhub">ParkHub</span>
      <h2>Login</h2>

      <div>
        <label>
          Tipo de Login:
          <select
            value={loginType}
            onChange={(e) => setLoginType(e.target.value)}
          >
            <option value="user">Usuário</option>
            <option value="company">Empresa</option>
          </select>
        </label>
      </div>

      <form>
        <input
          className="form-input"
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

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
