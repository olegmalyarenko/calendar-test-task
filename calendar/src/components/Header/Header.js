import React from 'react';
import './Header.scss'; 
import { ReactComponent as Icon } from './Logo.svg';
import Navigation from '../Navagation';

const Header = () => {
  return (
       <div className="header flex">
        <Icon width="146px" height="27px"/>
        <Navigation />
       </div>
    )
} 

export default Header;