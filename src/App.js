import React from 'react';
import logo from './assets/img/gci.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Amaze App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Google-Code-in 2019
        </a>
      </header>
    </div>
  );
}

export default App;
