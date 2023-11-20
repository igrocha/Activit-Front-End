import './index.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/LandingPage/Login';
import Landing from './pages/LandingPage';
import RegisterPage from './pages/LandingPage/RegisterPage';

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
    element: <RegisterPage />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
