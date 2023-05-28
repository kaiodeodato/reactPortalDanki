import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='header'> 
        <Link to="/">
            <h2>Portal Danki</h2>
        </Link>

    </nav>
  )
}
