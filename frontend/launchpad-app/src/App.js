import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const date = Date.now()
  const bool = true;
  const [loggedIn, setLoggedIn] = useState(false);
  
  

  function checkLoggedIn() {
    // fetch backend endpoint
    // set state to fetched 
  }



  return (
    <div className="App">
      <p>Hello, world</p>

    </div>
  );
}

export default App;
