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

  state = {
    active:false
  }

  handleScrollToggle = (e) => {
    e.preventDefault()
    console.log('clicks');
    this.setState({ active: !this.state.active });
  }


  render() {
    return (
      <div>
        <NavBar/>
        <Homepage/>
      /*<Router>
          <NavBar handleScrollToggle={this.handleScrollToggle}/>
      <div className="App">

          <Switch>
            <Route exact path="/" component={Homepage} />

            <scrollIntoViewIfNeeded active={this.state.active}>
            <Route path="/aboutme" render={(props) => <AboutMe/>} />
            </scrollIntoViewIfNeeded>

            <Route path="/projects" render={(props) => <Projects/>} />

            <Route path="/Resume" render={(props) => <Resume/>} />

            <Route path="/contact" render={(props) => <Contact/>} />

            <Route path="/blog" render={(props) => <Blogs/>} />
          </Switch>

      </div>
      </Router>*/
      </div>
    );
  }
}

export default App;
