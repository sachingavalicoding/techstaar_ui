import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <nav className='header'>
      <h1> ShinChan  </h1>
      <main>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </main>
    </nav>
  )
}

export default Header

