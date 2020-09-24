import React from 'react';
import './Navigation.scss'; 
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to='/'>Home</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to='/about'>About us</Link>
      </li>
    </ul>
    )
}
export default Navigation;