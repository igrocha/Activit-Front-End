import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useReservaContext } from '../../context/ReservaContext';

const ListarReservasFeitas = ({ reservas, ...props }) => {
  const { listarReservas, editarReserva, excluirReserva } = useReservaContext();
  const [edicao, setEdicao] = useState(null);

  const handleEditar = (id) => {
    setEdicao(id);
  };

  const handleSalvarEdicao = (id, novaHoraSaida) => {
    editarReserva(id, { horaSaida: novaHoraSaida });
    setEdicao(null);
  };

  const handleExcluir = (id) => {
    excluirReserva(id);
  };

  return (
    <div className="p-2 w-full h-full overflow-auto max-h-[500px] shadow-2xl shadow-[#006DFF]">
      <h2 className="text-2xl font-bold mb-4">Reservas Feitas:</h2>
      {listarReservas.map((reserva) => (
        <div
          key={reserva.id}
          className="mb-6 p-4 border border-gray-300 rounded"
        >
          <p className="mb-2 block text-base font-medium">
            Nome do Cliente: {reserva.nome}
          </p>
          <p className="mb-2 block text-base font-medium">
            Placa do Carro: {reserva.placa}
          </p>
          <p className="mb-2 block text-base font-medium">
            Data da Reserva: {reserva.data}
          </p>
          <p className="mb-2 block text-base font-medium">
            Hora de Entrada: {reserva.horaEntrada}
          </p>
          <p className="mb-2 block text-base font-medium">
            Hora de Saída:{' '}
            {edicao === reserva.id ? (
              <input
                className="mb-2 text-base font-medium"
                type="time"
                value={reserva.horaSaida}
                onChange={(e) => handleSalvarEdicao(reserva.id, e.target.value)}
              />
            ) : (
              <span>{reserva.horaSaida}</span>
            )}
          </p>
          <p className="mb-2 block text-base font-medium">
            Valor da Reserva: {reserva.valorTotal}
          </p>
          <button
            className="bg-[#0335fc] hover:bg-green-700 mx-2 text-white py-2 px-4 rounded mt-4"
            onClick={() => handleEditar(reserva.id)}
          >
            Editar
          </button>
          <button
            className="bg-[#0335fc] hover:bg-red-700 mx-4 text-white py-2 px-4 rounded mt-4"
            onClick={() => handleExcluir(reserva.id)}
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListarReservasFeitas;
