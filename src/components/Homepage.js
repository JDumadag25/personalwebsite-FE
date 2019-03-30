import React from 'react'
import AboutMe from './AboutMe'
import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect, Switch, Link, withRouter} from 'react-router-dom'

class Homepage extends React.Component{

  handleAboutMe = () => {
  console.log("about me");
  }

  handleContact = () => {
    console.log("contact");
  }

  render(){
    return(
      <div>
        <h1>JUSTIN DUMADAG</h1>
        <h3>Software Developer</h3>
        <Button as={Link} to='/aboutme'>ABOUT ME</Button><Button as={Link} to='/contact'>CONTACT</Button>
        <br></br>
        <Link to="/aboutme" className="btn btn-primary">About Me</Link> <Link to="/contact" className="btn btn-primary">Contact</Link>
      </div>
    )
  }
}
export default Homepage
