import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>BookFinder</h1>
    <nav>
      <div>
        <Link to="/Home">Find a Book!</Link>
      </div>
    </nav>
  </div>
)

export default Navbar
