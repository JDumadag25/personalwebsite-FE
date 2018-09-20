import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <NavBar/>
        <Homepage/>
      </div>
    );
  }
}

export default App;
