import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoSVGneon from '../../assets/teste.svg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('user');
  const navigate = useNavigate();


  const containerStyle = {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    color: 'white',
    minHeight: '98vh',
    borderRadius: '20px',
    boxShadow: '0px 0px 7px 1px var(--azulclaroapp)',
    background: 'linear-gradient(to right, var(--azulclaroapp), var(--azulescuroapp))'
  };

  const parkhubStyle = {
    fontSize: '50px',
    color: 'var(--brancopuro)',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const labelStyle = {
    alignItems: 'center',
    flexDirection: 'column',
    padding: '8px',
    borderRadius: '50px',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto auto auto auto ',
    width: '200px',
  };

  const selectStyle = {
    color: 'var(--azulclaroapp)',
    borderRadius: '50px',
    padding: '8px',
    border: '0',
    boxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
    backgroundColor: 'var(--azulescuroapp)',
  };

  const buttonStyle = {
    fontSize: '22px',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    padding: '10px',
    color: 'var(--azulclaroapp)',
    backgroundColor: 'var(--azulescuroapp)',
    width: '100px',
    border: '0',
    borderRadius: '50px',
    boxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
  };

  const formInputStyle = {
    width: '100%',
    padding: '8px',
    margin: 'auto auto 16px auto',
    borderRadius: '20px',
    border: '2px solid var(--azulclaroapp)',
    color: 'white',
    boxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
    backgroundColor: 'transparent',
  };

  const cadastroStyle = {
    color: 'white',
    fontSize: '20px',
    marginBottom: '30px',
  };

  function handleLogin() {
    if (username === '' || password === '') {
      alert('Por favor, preencha todos os campos.');
    } else {
      console.log(
        `Username: ${username}, Password: ${password}, Type: ${loginType}`
      );

      if (loginType === 'user') {
        navigate(`/vagas/${username}`);
      } else if (loginType === 'company') {
        navigate('/ListarReservasFeitas'); 
      }
    }
  }

  return (
    <div style={containerStyle}>
      <UserContext.Provider value={{ username, loginType }}>
      <img width="150" height="150" src={logoSVGneon} />
      <span style={parkhubStyle}>ParkHub</span>
      <div style={{ backgroundColor: 'transparent', borderRadius: '10px', padding: '6px' }}>
        <p style={{textAlign:'center'}}>Método de Entrada</p>
        <label style={labelStyle}>
          <select
            value={loginType}
            onChange={(e) => setLoginType(e.target.value)}
            style={selectStyle}
          >
            <option value="user">Sou Usuário</option>
            <option value="company">Sou Empresa</option>
          </select>
        </label>
      </div>
      <form style={{ marginTop: '10px' }}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={formInputStyle}
        />
        <br />
        <input type="password"
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
          <p style={cadastroStyle}>
            Sem cadastro? <Link to="/register" style={{ color: 'Highlight', textDecoration: 0, }}>Cadastrar-se</Link>
          </p>
          <button type="button" onClick={handleLogin} style={buttonStyle}>
            Entrar
          </button>
        </div>
      </form>
      </UserContext.Provider>
    </div>
  );
};

export default Login;

export const UserContext = React.createContext();