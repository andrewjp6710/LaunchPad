import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function App() {
  /*
  const date = Date.now()
  const bool = true;
  const [loggedIn, setLoggedIn] = useState(false);
  
  

  function checkLoggedIn() {
    // fetch backend endpoint
    // set state to fetched 
  }
  */



  return (
    <div className="App">
      <main className="background">
        <header>
          <p className="header-logo">
            launchpad.
          </p>

          <p className="header-signin">
            <Button
                style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "#E4816B",
                    borderColor: "#E4816B",
                    borderWidth: 2
                }}
                variant="outlined">
                Sign In
            </Button> 
          </p>
        </header>

      </main>


      <footer className="footer-background">
        <p className="footer-details">
          Accenture Team 1
        </p>
      </footer>
        
       

    
    </div>
  );
}

export default App;
