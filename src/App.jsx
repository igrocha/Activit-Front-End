import './index.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/LandingPage/Landing.jsx';
import EstacionamentoLanding from './pages/LandingPage/EstacionamentoLanding.jsx';
import Login from './pages/Login/Login.jsx';
import RegisterPage from './pages/Register/RegisterPage.jsx';
import Detalhevagas from './pages/Home/Estacionamentos.jsx';
import TopBar from './components/TopBar/TopBar.jsx';
import TopBarComp from './components/TopBar/TopBarComp.jsx';
import TopBarLanding from './pages/LandingPage/TopBarLanding.jsx';
import ErrorPage from './pages/Error/ErrorPage';
import ReservaEstacionamento from './pages/Reserva/ReservaEstacionamento';
import ListarReservasFeitas from './pages/Reserva/ListarReservasFeitas';
import { ReservaProvider } from './context/ReservaContext';
import ProfilePage from './pages/profile/Profile';

const App = () => {
  const [userData, setUserData] = React.useState(() => {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  const handleRegister = (data) => {
    localStorage.setItem('userData', JSON.stringify(data));
    setUserData(data);
  };

  const handleDeleteData = () => {
    localStorage.removeItem('userData');
    setUserData(null);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <TopBarLanding />
          <Landing />
        </>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <RegisterPage onRegister={handleRegister} />,
    },
    {
      path: '/profile',
      element: (
        <ProfilePage userData={userData} onDeleteData={handleDeleteData} />
      ),
    },
    {
      path: '/vagas/:username',
      element: (
        <>
          <TopBar />
          <Detalhevagas />
        </>
      ),
    },
    {
      path: '/estacionamentos',
      element: (
        <>
          <TopBarLanding />
          <EstacionamentoLanding />
        </>
      ),
    },
    {
      path: '/ReservaEstacionamento',
      element: (
        <>
          <TopBar />
          <ReservaEstacionamento />
        </>
      ),
    },
    {
      path: '/ListarReservasFeitas',
      element: 
        <>
          <TopBarComp />
          <ListarReservasFeitas />
        </>
    },
    {
      path: '/*',
      element: (
        <>
          <ErrorPage />
        </>
      ),
    },
  ]);

  return (
    <ReservaProvider>
      <RouterProvider router={router} />
    </ReservaProvider>
  );
};
export default App;
