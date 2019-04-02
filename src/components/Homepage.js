import React from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Homepage extends React.Component{

  render(){
    return(
      <div>
        <h1>JUSTIN DUMADAG</h1>
        <h3>Software Developer</h3>
        <Button as={Link} to='/aboutme'>ABOUT ME</Button><Button as={Link} to='/contact'>CONTACT</Button>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </div>
    )
  }
}
export default Homepage
