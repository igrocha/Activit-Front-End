import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useReservaContext } from '../../context/ReservaContext';

const ListarReservasFeitas = ({ reservas, ...props }) => {
    const { listarReservas, editarReserva, excluirReserva } = useReservaContext();
    const [edicao, setEdicao] = useState(null);
  
    const handleEditar = (id) => {
      setEdicao(id);
    };
  
    const calcularValorTotal = (horaEntrada, novaHoraSaida) => {
      const horaEntradaDate = new Date(`2023-01-01T${horaEntrada}`);
      const horaSaidaDate = new Date(`2023-01-01T${novaHoraSaida}`);
  
      // Calcula a diferença em milissegundos
      const diferencaEmMilissegundos = horaSaidaDate - horaEntradaDate;
  
      // Converte a diferença para horas
      const diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60 * 60);
  
      // Calcula o valor total multiplicando as horas pela taxa (8 pré-definida)
      const valorTotal = diferencaEmHoras * 8;
  
      // Formata o valor total para Reais
      const valorTotalFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(valorTotal);
  
      return valorTotalFormatado;
    };
  
    const handleSalvarEdicao = (id, novaHoraSaida) => {
      const reserva = listarReservas.find((reserva) => reserva.id === id);
      if (reserva) {
        const novoValorTotal = calcularValorTotal(
          reserva.horaEntrada,
          novaHoraSaida
        );
        editarReserva(id, {
          horaSaida: novaHoraSaida,
          valorTotal: novoValorTotal,
        });
        setEdicao(null);
      }
    };
  
    const handleExcluir = (id) => {
      excluirReserva(id);
    };
  
    return (
      <div style={{ marginLeft:'10px', marginTop:'10px', width:'350px', alignItems:'center'}}>
        <h2 className="text-2xl font-bold mb-4" style={{textAlign:'center'}}>Reservas Feitas:</h2>
        {listarReservas.map((reserva) => (
          <div
            key={reserva.id}
            className="mb-6 p-4 border border-gray-300 rounded"
            style={{WebkitBoxShadow: '0px 0px 5px 0px var(--azulclaroapp)'}}
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
              className="bg-[#0335fc] hover:bg-red-700 mx-2 text-white py-2 px-4 rounded mt-4"
              onClick={() => handleExcluir(reserva.id)}
            >
              Excluir
            </button>
            <button
              className="bg-[#0335fc] hover:bg-green-700 mx-4 text-white py-2 px-4 rounded mt-4"
              onClick={() => handleEditar(reserva.id)}
              style={{marginLeft:'100px'}}
            >
              Editar
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ListarReservasFeitas;
