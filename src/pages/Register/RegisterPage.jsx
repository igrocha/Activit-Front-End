import { useState } from 'react';

function Register() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Tela de cadasto</h1>
      <div className="card">
        <div>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Nome completo"
          />
        </div>
        <div>
          <input type="text" id="message" name="message" placeholder="Cpf " />
        </div>
        <div>
          <input type="text" id="message" name="message" placeholder="Gmail" />
        </div>
        <div>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Numero do telefone celular"
          />
        </div>
        <div>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Placa do veiculo"
          />
        </div>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            Cadastrar
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
