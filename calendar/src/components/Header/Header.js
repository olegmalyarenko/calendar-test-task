import React from 'react';
import './Header.scss'; 
import { ReactComponent as Icon } from './Logo.svg';
import { ReactComponent as MobileIcon } from './MobileIcon.svg';
import Navigation from '../Navagation';

const Header = () => {

  return (
       <div className="header flex">
        <Icon width="165px" height="50px" style={{marginTop: "50px"}}/>
        <Navigation />
        < MobileIcon className="mobile-icon" width="40px" height="40px" />
       </div>
    )
} 

export default Header;