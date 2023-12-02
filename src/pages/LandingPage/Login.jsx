import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoSVGneon from '../../assets/teste.svg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('user');
  const navigate = useNavigate();

  const containerStyle = {
    maxWidth: '700px',
    margin: 'auto',
    padding: '50px',
    border: '5px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'var(--azulescuroapp)',
  };

  const logoStyle = {
    maxWidth: '600px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const parkhubStyle = {
    fontSize: '90px',
    color: 'var(--brancopuro)',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const labelStyle = {
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    marginBottom: '20px',
    color: 'var(--azulclaroapp)',
  };

  const selectStyle = {
    marginBottom: '1px',
  };

  const buttonStyle = {
    fontSize: '22px',
    display: 'flex',
    alignItems: 'flex-start',
    margin: 'auto',
    padding: '10px',
    color: 'var(--azulclaroapp)',
    backgroundColor: 'var(--azulescuroapp)',
    borderRadius: '20px',
    boxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
  };

  const formInputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
    boxSizing: 'border-box',
    borderRadius: '20px',
  };

  const cadastroStyle = {
    fontSize: '20px',
  };

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
    <div style={containerStyle}>
      <img src={logoSVGneon} style={logoStyle} />
      <span style={parkhubStyle}>ParkHub</span>

      <div>
        <label style={labelStyle}>
          Tipo de Login:
          <select
            value={loginType}
            onChange={(e) => setLoginType(e.target.value)}
            style={selectStyle}
          >
            <option value="user">Usuário</option>
            <option value="company">Empresa</option>
          </select>
        </label>
      </div>

      <form>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={formInputStyle}
        />
        <br />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleLogin();
            }
          }}
          style={formInputStyle}
        />
        <div>
          <button type="button" onClick={handleLogin} style={buttonStyle}>
            Login
          </button>
        </div>
      </form>
      <p style={cadastroStyle}>
        Ainda não possui cadastro? <Link to="/register">Cadastrar-se</Link>
      </p>
    </div>
  );
};

export default Login;
