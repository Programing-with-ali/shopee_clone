import logo from './pwa.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div className="App">
     {/*    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to <code>Programing with ali</code>.
          </p>
          <a
            className="App-link"
            href="https://bit.ly/3zD0QYH"
            target="_blank"
            rel="noopener noreferrer"
          >
        PWA
       </a>
        </header> */}

        <img src="/public/img/banner3.png"></img>
      </div>
    );
  }
}

export default App;
