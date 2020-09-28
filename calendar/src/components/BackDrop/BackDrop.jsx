import React from 'react';
import './BackDrop.scss';

const BackDrop = ({  mobileMenu, closeMobileMenu}) => {

    if (mobileMenu) {
      return ( 
        <div className="backgrop" onClick={() => closeMobileMenu()}/> 
      )
    }
    return ( 
      <div className="backgrop" /> 
    )
};

export default BackDrop;