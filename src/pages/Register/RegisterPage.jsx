import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logoSVGneon from '../../assets/teste.svg';

function Register({ onRegister }) {

  const containerStyle = {
    margin: '9px',
    minHeight: '98vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
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

  //BOTÃO DE CADASTRAR ESTILIZADO

  const [buttonStyle, setButtonStyle] = useState({
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    padding: '10px',
    color: 'white',
    backgroundColor: 'var(--azulescuroapp)',
    borderRadius: '50px',
    boxShadow: '0px 0px 7px 1px var(--azulclaroapp)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 1s ease, border 3s ease', 
  });

  const handleMouseEnter = () => {
    setButtonStyle(prevStyle => ({
      ...prevStyle,
      transform: 'scale(1.1)',
      background: 'linear-gradient(to right, var(--azulclaroapp), var(--azulescuroapp))',
      border: 'solid 1px white',
      boxShadow: '0px 0px 10px 3px var(--azulclaroapp)',
    }));
  };
  const handleMouseLeave = () => {
    setButtonStyle(prevStyle => ({
      ...prevStyle,
      transform: 'scale(1)',
      background: 'var(--azulescuroapp)',
      boxShadow: '0px 0px 7px 1px var(--azulclaroapp)',
      color: 'white',
      border: 'none',
    }));
  };  

  //...fim do botão cadastrar estilizado

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

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [CPF, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [loginType, setLoginType] = useState('user');
  const [CNPJ, setCNPJ] = useState(''); // Novo estado para armazenar CNPJ
  
  const navigate = useNavigate();
  

  function handleregister() {
    if (
      name === '' ||
      (loginType === 'user' && username === '') ||
      (loginType === 'user' && CPF === '') ||
      email === '' ||
      password === '' ||
      password2 === ''
    ) {
      alert('Por favor, preencha todos os campos.');
    } else {
      const userData = {
        name,
        username,
        CPF,
        email,
        password,
        loginType,
        CNPJ,
      };
      onRegister(userData);

      if (loginType === 'user' || loginType === 'company') {
        navigate('/login');
      }
    }
  }

  return (
    <>
      <div style={containerStyle}>
        <img width="150" height="150" src={logoSVGneon} />
        <span style={parkhubStyle}>ParkHub</span>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '30px', borderRadius: '20px', boxShadow: '0px 0px 7px 1px var(--azulclaroapp)' }}>
          <div style={{ backgroundColor: 'transparent', borderRadius: '10px', padding: '6px' }}>
            <p style={{ textAlign: 'center' }}>Método de Entrada</p>
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
          <p style={{ fontSize: '20px', textAlign: 'center', margin: 'auto auto 20px auto', color: 'var(--azulclaroapp)' }}>Insira seus dados:</p>
          <div>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={loginType === 'user' ? "Nome Completo" : "Nome da Empresa"}
                style={formInputStyle}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="user"
                id="username"
                placeholder="Nome de Usuário"
                style={formInputStyle}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type={loginType === 'user' ? "text" : "id"} // Altera o tipo com base no tipo de login
                name="id"
                id={loginType === 'user' ? "CPF" : "CNPJ"} // Altera o ID com base no tipo de login
                placeholder={loginType === 'user' ? "CPF" : "CNPJ"} // Altera o placeholder com base no tipo de login
                style={formInputStyle}
                onChange={(e) => setCPF(e.target.value)} // Use setCPF ou setCNPJ com base no tipo de login
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                id="email"
                placeholder="E-mail"
                style={formInputStyle}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                name="name"
                id="password"
                placeholder="Senha"
                style={formInputStyle}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                name="name"
                id="password2"
                placeholder="Repita a senha"
                style={formInputStyle}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <div>
            </div>
            <button type= 'button' to='./login' onClick={handleregister} style={buttonStyle} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
