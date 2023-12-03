import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {

  const backgroundpage = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, var(--azulclaroapp), var(--azulescuroapp))',
    borderRadius: '0px',
    padding: '20px',
    color: 'white',
    margin: '0',
  };

  return (
    <>
      <div style={{...backgroundpage}}>
        <h2>As vezes estacionar se torna uma missão impossível, não é mesmo?</h2>
        <div style={{ display: 'flex', marginTop: '40px' }}>
          <Link to="/">
            <img width="250" height="250" src="..\src\assets\Logo.svg" alt="Logo da Empresa" />
          </Link>
          <div style={{marginLeft: '20px', marginTop:'40px'}}>
            <span style={{ color: 'var(--brancopuro)', fontSize: '80px', marginLeft: '10px' }}>ParkHub</span>
            <h3>"Estacione com Facilidade, Reserve com Tranquilidade"</h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
