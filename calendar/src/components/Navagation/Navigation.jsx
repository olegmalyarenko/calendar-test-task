import React from 'react';
import './Navigation.scss'; 

const Navigation = () => {
    return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
       <a className="nav-link" href="#">About us</a>
      </li>
    </ul>
    )
}
export default Navigation;