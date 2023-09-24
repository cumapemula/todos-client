import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './components/pages/Login/index.tsx';
import Register from './components/pages/Register/index.tsx';
import Home from './components/pages/Home/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/home',
    element: <Home></Home>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
