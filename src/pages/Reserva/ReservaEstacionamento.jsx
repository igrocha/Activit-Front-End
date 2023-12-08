import React, { useState,useEffect } from "react";
import ReservaForm from './ReservaForm';

const ReservaEstacionamento = () => {

  
  const [reserva, setReserva] = useState({
    nome: '',
    email: '',
    placa: '',
    data: '',
    horaEntrada: '',
    horaSaida: '',
    valorTotal: '',
  });

  const handleReservaChange = (campo, valor) => {
    setReserva({ ...reserva, [campo]: valor });
  };

  return (
    <div className="p-2">
      <h1 className="text-2xl text-white flex items-center justify-between rounded-t-lg py-4 px-9" style={{backgroundColor:'var(--azulclaroapp)'}}>
        Reserva de Estacionamento
      </h1>

      <ReservaForm reserva={reserva} onChange={handleReservaChange} />
    </div>
  );
};
export default ReservaEstacionamento;
