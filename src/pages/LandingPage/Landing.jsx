import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {

  const backgroundpage = {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '89vh',
    background: 'linear-gradient(to right, var(--azulclaroapp), var(--azulescuroapp))',
    borderRadius: '20px',
    boxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
    padding: '20px',
    color: 'white',
  };

  return (
    <>
      <div style={backgroundpage}>
        <h2>As vezes estacionar se torna uma missão impossível, não é mesmo?</h2>
        <div style={{ display: 'flex', marginTop: '50px' }}>
          <Link to="/">
            <img width="150" height="150" src="..\src\assets\Logo.svg" alt="Logo da Empresa" />
          </Link>
          <div style={{marginLeft: '20px'}}>
            <span style={{ color: 'var(--brancopuro)', fontSize: '80px', marginLeft: '10px' }}>ParkHub</span>
            <h3>"Estacione com Facilidade, Reserve com Tranquilidade"</h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
