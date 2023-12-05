import './index.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/LandingPage/Landing.jsx';
import EstacionamentoLanding from './pages/LandingPage/EstacionamentoLanding.jsx';
import Login from './pages/Login/Login.jsx';
import RegisterPage from './pages/Register/RegisterPage.jsx';
import Detalhevagas from './pages/Home/Estacionamentos.jsx';
import TopBar from './components/TopBar/TopBar.jsx';
import TopBarLanding from './pages/LandingPage/TopBarLanding.jsx';
import ErrorPage from './pages/Error/ErrorPage'
import ReservaEstacionamento from './pages/Reserva/ReservaEstacionamento'

const router = createBrowserRouter([
  {
    path: '/',
    element:(
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
    element: <RegisterPage />,
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
        <TopBarLanding />
        <ReservaEstacionamento />
      </>
    ),
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
export default function App() {
  return <RouterProvider router={router} />;
}
