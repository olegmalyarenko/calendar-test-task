import React from 'react';
import './SideMenu.scss';
import { ReactComponent as Icon } from './Logo.svg';
import { NavLink } from 'react-router-dom';


const SideMenu = ({closeMobileMenu}) => {

  
    return ( 
      <div className="side-menu" >
        <Icon />
        <ul className="mobile-nav">
           <li className="nav-item">
             <NavLink className="nav-link"
             activeClassName="active" 
             onClick={() => closeMobileMenu()}
             exact to='/'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" 
            activeClassName="active"  
            onClick={() => closeMobileMenu()}
            exact to='/about'>About us</NavLink>
          </li>
        </ul>

       
      </div>
        
    )
};

export default SideMenu;