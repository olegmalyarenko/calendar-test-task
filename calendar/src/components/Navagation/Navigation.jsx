import React from 'react';
import './Navigation.scss'; 
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink className="nav-link"
        activeClassName="active" 
        exact to='/'>Home</NavLink>
      </li>
      <li className="nav-item">
       <NavLink className="nav-link" 
       activeClassName="active"  
       exact to='/about'>About us</NavLink>
      </li>
    </ul>
    )
}
export default Navigation;