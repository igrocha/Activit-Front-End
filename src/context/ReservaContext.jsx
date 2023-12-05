import { createContext, useContext, useState } from 'react';

const ReservaContext = createContext();

export const useReservaContext = () => {
  return useContext(ReservaContext);
};

export const ReservaProvider = ({ children }) => {
  const [listarReservas, setListaReservas] = useState([]);

  const adicionarReserva = (novaReserva) => {
    setListaReservas([...listarReservas, novaReserva]);
  };

  const editarReserva = (id, novosDados) => {
    const reservasAtualizadas = listarReservas.map((reserva) =>
      reserva.id === id ? { ...reserva, ...novosDados } : reserva
    );
    setListaReservas(reservasAtualizadas);
  };

  const excluirReserva = (id) => {
    const reservasAtualizadas = listarReservas.filter(
      (reserva) => reserva.id !== id
    );
    setListaReservas(reservasAtualizadas);
  };

  return (
    <ReservaContext.Provider
      value={{
        listarReservas,
        adicionarReserva,
        editarReserva,
        excluirReserva,
      }}
    >
      {children}
    </ReservaContext.Provider>
  );
};
