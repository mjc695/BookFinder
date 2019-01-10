import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <div className="navbar">
      <nav>
        <Link to="/home">
          <div className="Icons">
            <img src="search-icon.png" width={90} height={80} />
            <h1 className="AppName">BookFinder</h1>
          </div>
        </Link>
      </nav>
      <div className="Icons">
        <p className="poweredText">Powered By </p>
        <img src="OpenLibrary.png" width={200} height={80} />
      </div>
    </div>
  </div>
)

export default Navbar
