import React from 'react';
import './BackDrop.scss';

const BackDrop = ({closeMobileMenu}) => {
    
    return ( 
      <div className="backgrop" onClick={() => closeMobileMenu()}/> 
    )
};

export default BackDrop;