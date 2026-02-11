import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
// 📝 CORREGIDO: El componente se llama Jumbotron (singular), no Jumbotrons
import NavBar from './components/Home';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <NavBar />
    {/* 📝 CORREGIDO: Nombre actualizado a Jumbotron (singular) */}
    <Jumbotron />
    <Cards/>
    <Footer/>
  </div>
)
