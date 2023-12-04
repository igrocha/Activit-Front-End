import './index.css';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/LandingPage/Login';
import Landing from './pages/LandingPage';
import RegisterPage from './pages/LandingPage/RegisterPage';
import ProfilePage from './pages/LandingPage/ProfilePage';
import DetalheVaga from './pages/LandingPage/DetalheVaga';
import Vagas from './pages/LandingPage/Vagas';

const App = () => {
  const [registeredData, setRegisteredData] = useState([]);

  const handleRegister = (formData) => {
    setRegisteredData((prevData) => [...prevData, formData]);
  };

  const handleEdit = (updatedRecords) => {
    setRegisteredData(updatedRecords);
    console.log('Dados atualizados:', updatedRecords);
  };

  const handleDelete = (index) => {
    setRegisteredData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
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
        <ProfilePage
          records={registeredData}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ),
    },
    {
      path: '/vaga',
      element: <Vagas />,
    },
    {
      path: '/vaga/:id',
      element: <DetalheVaga />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
