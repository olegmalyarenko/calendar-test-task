import React from 'react';
import './App.scss';
import Header from '../Header';
import Row from '../Row';
import Banner from '../Banner';
import Calculator from '../Calculator';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Row 
       left={<Banner/>} 
       right={ <Calculator/>}
      />
    </div>
  );
}

export default App;
