import React, { useState } from 'react';
import './App.scss';
import Header from '../Header';
import MainPage from '../../pages/MainPage';
import { Switch, Route } from 'react-router-dom';
import About from '../../pages/About';
import SideMenu from '../SideMenu';
import BackDrop from '../BackDrop';


const App = () => {
  const [ mobileMenu, setMobileMenu ] = useState(false);
  const closeMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }
  
  return (
    <div className="App">
      <Header  setMobileMenu={setMobileMenu}/>
      { mobileMenu && <SideMenu closeMobileMenu={closeMobileMenu} /> }
      { mobileMenu && <BackDrop  mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} /> }
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;
