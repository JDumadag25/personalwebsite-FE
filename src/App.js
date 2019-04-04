import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import scrollIntoView from 'scroll-into-view-if-needed'
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch, Link, withRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
          <NavBar/>
      <div className="App">
        <scrollIntoViewIfNeeded>
        </scrollIntoViewIfNeeded>

          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route path="/aboutme" render={(props) => <AboutMe/>} />

            <Route path="/projects" render={(props) => <Projects/>} />

            <Route path="/Resume" render={(props) => <Resume/>} />

            <Route path="/contact" render={(props) => <Contact/>} />

            <Route path="/blog" render={(props) => <Blogs/>} />
          </Switch>

      </div>
      </Router>
      </div>
    );
  }
}

export default App;
