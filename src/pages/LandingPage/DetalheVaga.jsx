import React, { useState, useEffect } from 'react';
import vagasData from './vagas.json';
import { Link, useParams } from 'react-router-dom';

export default function DetalheVaga() {
  const [items] = useState(vagasData);
  const { id } = useParams();

  const vaga = items.find((item) => item.id === Number(id));

  const detalheContainerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'var(--brancopuro)',
  };

  const h2Style = {
    textAlign: 'center',
    color: '#333',
  };

  const divStyle = {
    textAlign: 'center',
    color: '#333',
    fontSize: '20px',
    padding: '20px',
  };

  const botaoDetalheVagaStyle = {
    fontSize: '25px',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: 'var(--azulescuroapp)',
    margin: '20px 280px',
    borderRadius: '20px',
    boxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <div style={detalheContainerStyle}>
      <h2 style={h2Style}>{vaga.estabelecimento}</h2>
      <div style={divStyle}>Endereço: {vaga.localizacao}</div>
      <div style={divStyle}>Horário de funcionamento: {vaga.horario}</div>
      <div style={divStyle}>Contato: {vaga.contato}</div>
      <div style={divStyle}>Valores: 1h - R$ {vaga.valorhora}</div>

      <nav style={botaoDetalheVagaStyle}>
        <Link style={linkStyle} to="/vaga">
          Reservar
        </Link>
      </nav>
      <nav style={botaoDetalheVagaStyle}>
        <Link style={linkStyle} to="/vaga">
          Voltar
        </Link>
      </nav>
    </div>
  );
}
