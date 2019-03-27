import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
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
