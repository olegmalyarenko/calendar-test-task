import React from 'react';
import './App.scss';
import Header from '../Header';
import Row from '../Row';
import Banner from '../Banner';
import Calendar from '../Calendar';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Row 
       left={<Banner/>} 
       right={ <Calendar/>}
      />
    </div>
  );
}

export default App;
