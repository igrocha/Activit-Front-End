import { useState } from 'react';
import ListarReservasFeitas from './ListarReservasFeitas';
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
      <h1 className="text-2xl text-white flex items-center justify-between rounded-t-lg bg-[#0335fc] py-4 px-9">
        Reserva de Estacionamento
      </h1>
      <ReservaForm reserva={reserva} onChange={handleReservaChange} />
    </div>
  );
};
export default ReservaEstacionamento;