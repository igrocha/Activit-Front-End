import React from 'react';
import { useLocation } from 'react-router-dom';
import { useReservaContext } from '../../context/ReservaContext';

const ListarReservasFeitas = ({ reservas, ...props }) => {
  const { listarReservas } = useReservaContext();

  return (
    <div className="p-2 w-full h-full">
      <h2 className="text-2xl font-bold mb-4">
        Reservas Feitas:{JSON.stringify(listarReservas)}
      </h2>
    </div>
  );
};

export default ListarReservasFeitas;
