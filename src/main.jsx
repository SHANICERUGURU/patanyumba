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
const router= createBrowserRouter([
  {
    path:'/',
    element: <CardsContainer/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
