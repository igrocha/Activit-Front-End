import React, { useReducer, useState, useContext } from 'react';
import ReservaEstacionamento from './ReservaEstacionamento';

import { useNavigate } from 'react-router-dom';
import { useReservaContext } from '../../context/ReservaContext';

const ReservaForm = ({ reserva, onChange }) => {
  const [state, dispatch] = useReducer(reservarVagas, { count: 30 });

  const { adicionarReserva } = useReservaContext();

  const navigate = useNavigate();

  const calcularValorTotal = () => {
    const horaEntrada = new Date(`2023-01-01T${reserva.horaEntrada}`);
    const horaSaida = new Date(`2023-01-01T${reserva.horaSaida}`);

    // Calcula a diferença em milissegundos
    const diferencaEmMilissegundos = horaSaida - horaEntrada;

    // Converte a diferença para horas
    const diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60 * 60);

    // Calcula o valor total multiplicando as horas pela taxa (8 pré-definida)
    const valorTotal = diferencaEmHoras * 8;

    // Formata o valor total para Reais
    const valorTotalFormatado = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valorTotal);

    // Atualiza o estado da reserva com o valor total
    onChange('valorTotal', valorTotalFormatado);
  };

  function reservarVagas(state, action) {
    switch (action.type) {
      case 'RESERV':
        return { count: state.count - 1 };
      default:
        throw new Error(`Erro Ação inexistente`);
    }
  }

  const handleEnviarReserva = () => {
    // Verifica se há vagas disponíveis antes de fazer a reserva
    if (state.count > 0) {
      const novaReserva = {
        id: new Date().getTime(),
        nome: reserva.nome,
        placa: reserva.placa,
        email: reserva.email,
        data: reserva.data,
        horaEntrada: reserva.horaEntrada,
        horaSaida: reserva.horaSaida,
        valorTotal: reserva.valorTotal,
      };

      dispatch({ type: 'RESERV' });
      adicionarReserva(novaReserva);
      navigate('/ListarReservasFeitas');
    } else {
      alert('Não há mais vagas disponíveis!');
    }
  };

  return (
    <div className="p-2">
      <form>
        <div class="mb-3">
          <div className="mb-4 rounded bg-gray-200 p-2 shadow">
            <p className="mb-3 text-xl font-bold">
              Reservas disponíveis: {state.count} reservas
            </p>
          </div>
          <label htmlfor="name" class="mb-2 block text-base font-medium">
            Seu nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Digite seu nome"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={reserva.nome}
            onChange={(e) => onChange('nome', e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label htmlforfor="placa" class="mb-2 block text-base font-medium">
            Sua placa
          </label>
          <input
            id="placa"
            name="placa"
            type="text"
            placeholder="Digite sua placa"
            class="rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={reserva.placa}
            onChange={(e) => onChange('placa', e.target.value)}
          />
        </div>
        <div>
          <label htmlfor="email" class="mb-2 block text-base font-medium">
            Seu E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Digite seu E-mail"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={reserva.email}
            onChange={(e) => onChange('email', e.target.value)}
          />
        </div>
        <div>
          <label htmlfor="data" class="block text-base font-medium">
            Data:
          </label>
          <input
            id="data"
            type="date"
            data="data"
            class="py-2 px-6 border border-[#e0e0e0]"
            value={reserva.data}
            onChange={(e) => onChange('data', e.target.value)}
          />
        </div>
        <div>
          <label htmlfor="time" class="block text-base font-medium">
            Hora de entrada:
          </label>
          <input
            id="timeStart"
            name="time"
            type="time"
            class="py-2 px-6 border border-[#e0e0e0]"
            value={reserva.horaEntrada}
            onChange={(e) => onChange('horaEntrada', e.target.value)}
            onBlur={calcularValorTotal}
          />
          <label htmlfor="time" class="block text-base font-medium">
            Hora de saída:
          </label>
          <input
            id="timeEnding"
            type="time"
            name="time"
            class="py-2 px-6 border border-[#e0e0e0]"
            value={reserva.horaSaida}
            onChange={(e) => onChange('horaSaida', e.target.value)}
            onBlur={calcularValorTotal}
          />
        </div>
        <div>
          <label htmlFor="valorTotal" className="block text-base font-medium">
            Valor Total:
          </label>
          <input
            id="valorTotal"
            type="text"
            name="valorTotal"
            className="py-2 px-6 border border-[#e0e0e0]"
            value={reserva.valorTotal}
            readOnly
          />
          <button
            type="submit"
            className="bg-[#0335fc] text-white py-2 px-4 rounded mt-4"
            onClick={handleEnviarReserva}
          >
            Enviar Reserva
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservaForm;
