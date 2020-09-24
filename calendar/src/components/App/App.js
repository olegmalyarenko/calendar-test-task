import React from 'react';
import './App.scss';
import Header from '../Header';
import MainPage from '../../pages/MainPage';
import { Switch, Route } from 'react-router-dom';
import About from '../../pages/About';


const App = () => {
  return (
    <div className="App">
      <Header />
     
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;
