import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage({ onRegister }) {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);

    setFormData({
      fullName: '',
      cpf: '',
      email: '',
      phoneNumber: '',
      password: '',
    });

    console.log('Navigating to /login...');
    navigate('/login');
  };

  return (
    <div style={formContainerStyle}>
      <h1>Tela de Cadastro</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Nome completo"
          style={inputStyle}
        />
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleInputChange}
          placeholder="CPF"
          style={inputStyle}
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="E-mail"
          style={inputStyle}
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Telefone"
          style={inputStyle}
        />
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Senha"
          style={inputStyle}
        />

        <button type="submit" style={submitButtonStyle} onClick={handleSubmit}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

const formContainerStyle = {
  textAlign: 'center',
  margin: '20px auto',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  margin: '8px 0',
  borderRadius: '5px',
};

const submitButtonStyle = {
  fontSize: '18px',
  padding: '10px',
  backgroundColor: '#007BFF',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default RegisterPage;
