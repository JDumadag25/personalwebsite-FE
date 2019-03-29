import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import AboutMe from './components/AboutMe'
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch, Link, withRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route path="/aboutme" render={(props) => <AboutMe/>} />

        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
