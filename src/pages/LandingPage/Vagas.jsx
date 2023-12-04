import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import vagasData from './vagas.json';

export default function Vagas() {
  const [items] = useState(vagasData);

  return (
    <div className="containervaga">
      <h2>Estacionamento</h2>

      <nav classname="vaga-container">
        <ul>
          {items.map((item) => (
            <div key={item.id}>
              <Link to={`/vaga/${item.id}`}>{item.estabelecimento}</Link>
            </div>
          ))}
          <div>
            <Link to="/profile">Perfil</Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}
