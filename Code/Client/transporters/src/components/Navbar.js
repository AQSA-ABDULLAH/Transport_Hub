import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <div className='nav-container'>

        <ul>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
        
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;