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

  return (
    <ReservaContext.Provider value={{ listarReservas, adicionarReserva }}>
      {children}
    </ReservaContext.Provider>
  );
};
