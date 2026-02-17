import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Navbar />
    <Jumbotron />
    <Cards />
    <Footer />
  </div>
)
