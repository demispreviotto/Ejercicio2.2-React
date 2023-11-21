import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

import ramenBg from './assets/Ramen.png'

function App() {

  const dishes = [
    {
      id: 1,
      name: 'plato 1',
      description: 'Este es el plato 1',
      price: 10
    },
    {
      id: 2,
      name: 'plato 2',
      description: 'Este es el plato 2',
      price: 20
    },
    {
      id: 3,
      name: 'plato 3',
      description: 'Este es el plato 3',
      price: 15
    }
  ]

  return (
    <div className='root-container'>
      <Navbar />
      <Header />
      <img className='ramen-bg' src={ramenBg} alt="ramen" />
      <Home dishes={dishes} />
    </div>
  )
}

export default App
