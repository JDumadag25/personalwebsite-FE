import React from 'react'
import AboutMe from './AboutMe'
import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter} from 'react-router-dom'

class Homepage extends React.Component{

  handleAboutMe = () => {
    console.log("hello");
    return <Route path="/aboutme" render={(props) => <AboutMe/>} />
  }

  handleContact = () => {
    console.log("contact");
  }

  render(){
    return(
      <div>
        <h1>JUSTIN DUMADAG</h1>
        <h3>Software Developer</h3>
        <Button onClick={this.handleAboutMe}>About me</Button><Button onClick={this.handleContact}>Contact</Button>
      </div>
    )
  }
}
export default Homepage
