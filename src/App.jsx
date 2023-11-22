import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Contact from './components/Contact/Contact'
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

  const menuItems = [
    {
      category: 'Signature Ramen Bowls',
      items: [
        {
          name: 'Classic Shoyu Ramen',
          description: 'Our signature soy sauce-flavored broth, served with tender chashu pork, green onions, and nori.',
        },
        {
          name: 'Spicy Miso Ramen',
          description: 'A flavorful blend of miso and spicy broth, topped with ground pork, bean sprouts, and a sprinkle of sesame seeds.',
        },
        {
          name: 'Vegetarian Zen Ramen',
          description: 'A light and wholesome option with vegetable broth, tofu, assorted seasonal vegetables, and a drizzle of sesame oil.',
        },
      ],
    },
    {
      category: "Chef's Specials",
      items: [
        {
          name: 'Tonkotsu Deluxe',
          description: 'Rich and creamy pork bone broth, accompanied by melt-in-your-mouth pork belly, bamboo shoots, and a seasoned soft-boiled egg.',
        },
        {
          name: 'Seafood Extravaganza Ramen',
          description: 'A delightful medley of fresh seafood in a savory broth, featuring shrimp, mussels, and fish cakes.',
        },
        {
          name: 'Sesame Chicken Ramen',
          description: 'Crispy sesame-coated chicken on a bed of ramen noodles, served with bok choy and a side of tangy ginger soy sauce.',
        },
      ],
    },
    {
      category: 'Sides and Appetizers',
      items: [
        {
          name: 'Edamame',
          description: 'Steamed soybeans lightly seasoned with sea salt.',
        },
        {
          name: 'Gyoza Fusion',
          description: 'Pan-fried dumplings filled with a succulent mixture of pork, cabbage, and aromatic spices.',
        },
        {
          name: 'Japanese Cucumber Salad',
          description: 'Refreshing cucumber slices tossed in a sesame-infused vinaigrette.',
        },
      ],
    },
    {
      category: 'Desserts',
      items: [
        {
          name: 'Matcha Green Tea Ice Cream',
          description: 'A perfect balance of sweetness and earthy matcha flavor.',
        },
        {
          name: 'Mochi Sampler',
          description: 'Indulge in an assortment of chewy mochi with various traditional fillings.',
        },
      ],
    },
  ];


  return (
    <div className='root-container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home dishes={dishes} />} />
          <Route path='/menu' element={<Menu menuItems={menuItems} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
