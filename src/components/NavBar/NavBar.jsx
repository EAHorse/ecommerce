import React from 'react';
import './navBar.css';
import CartWidget from './CartWidget';
import brand from '../../assets/brand.png';
import { FaMotorcycle, FaCar, FaShip, FaPlane, FaTractor } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link to='/' className="navbar-brand">
          <img src={brand} alt="Logo" className="navbar-logo" />
        </Link>        
      <ul className="navbar-menu">
        <Link to='/categoria/terrestrial' className="category">
          <p>Terrestrial</p>
          <div className="img-category">
            <FaMotorcycle size={30} />
          </div>
        </Link>
        <Link to='/categoria/air' className="category">
          <p>Air</p>
          <div className="img-category">
            <FaPlane size={30} />
          </div>
        </Link>
        <Link to='/categoria/aquatic' className="category">
          <p>Aquatic</p>
          <div className="img-category">
            <FaShip size={30} />
          </div>
        </Link>
        <Link to='/categoria/amphibious' className="category">
          <p>Amphibious</p>
          <div className="img-category">
            <FaTractor size={30} />
          </div>
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
