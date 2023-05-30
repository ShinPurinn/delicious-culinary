import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import{Route, Routes, useLocation } from 'react-router-dom';
import Searched from './Searched';
import Recipe from './Recipe';
import About from './About';


function Pages() {
  const location = useLocation();
  return (

      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>} />
          <Route path='/cuisine/:type' element={<Cuisine/>} />
          <Route path='/searched/:search' element={<Searched/>} />
          <Route path='/recipe/:name' element={<Recipe/>} />
          <Route path='/About' element={<About/>} />
      </Routes>

  )
}

export default Pages;