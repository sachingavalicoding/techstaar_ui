import React from 'react'
import Header from './Components/Header'
import {BrowserRouter as  Router, Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Product from './Components/Product'

import './style/App.css';
import './style/header.css';
import './style/home.css';
function App() {
  return (<Router>

      <Header /> 
      
      <Routes>
          <Route path='/' element={ <Home /> }  />
          <Route path='/product' element={<Product/> } />
      </Routes>

  </Router>
  )
  
}

export default App
