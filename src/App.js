import React, { Component } from 'react';
import Homepage from './components/Homepage'
import './App.css';


class App extends Component {

  // state = {
  //   active:false
  // }
  //
  // handleScrollToggle = (e) => {
  //   e.preventDefault()
  //   console.log('clicks');
  //   this.setState({ active: !this.state.active });
  // }


  render() {
    return (
      <div>
        <Homepage/>
      </div>
    );
  }
}

export default App;
