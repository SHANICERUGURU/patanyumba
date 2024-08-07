import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landingpage from './components/landingpage.jsx';
import CardsContainer from './components/CardsContainer.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import UpdateHouse from './components/updatehouse.jsx';
const router= createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/home',
    element: <App/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/updatehouse',
    element: <UpdateHouse/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
