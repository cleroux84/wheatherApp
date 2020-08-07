import React from 'react';
import Header from './Header'
import APIConfig from './APIConfig'
import './App.css';

const App = () => {
  
    return (
      <div className="App">
         <Header />
        <div className="row">
            <div className="col s12 m6 push-m3">
       
        <APIConfig />
                
      </div>
      </div>
      </div>
    );
  }


export default App;
