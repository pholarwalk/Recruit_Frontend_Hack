import React from 'react';

// config

// components

// images
import logo from '../images/logo.svg';

// styles
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          This is the <span className='lead'> new USER</span> frontend application...
        </h1>
        <p>
          Happy Coding!
        </p>
      </header>
    </div>
  );
}

export default App;
