import { useState } from 'react';

function Register() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Tela de cadasto</h1>
      <div className="card">
      <div class="mb-3">
          <label for="name" class="mb-2 block text-base font-medium">
            Seu nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome Completo"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-3">
          <label for="name" class="mb-2 block text-base font-medium">
            Seu nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="CPF"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-3">
          <label for="name" class="mb-2 block text-base font-medium">
            Seu nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="E-mail"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-3">
          <label for="name" class="mb-2 block text-base font-medium">
            Seu nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Senha"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
