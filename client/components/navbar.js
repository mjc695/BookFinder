import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <div className="navbar">
      <div className="Icons">
        <img src="search-icon.png" width={80} height={80} />
        <nav>
          <Link to="/home">
            <h1 className="AppName">BookFinder</h1>
          </Link>
        </nav>
      </div>
      <div className="Icons">
        <p className="poweredText">Powered By </p>
        <img src="OpenLibrary.png" width={200} height={80} />
      </div>
    </div>
  </div>
)

export default Navbar
