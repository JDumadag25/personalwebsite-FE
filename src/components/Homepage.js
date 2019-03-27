import React from 'react'
import AboutMe from './AboutMe'
import { Button } from 'semantic-ui-react'

class Homepage extends React.Component{
  render(){
    return(
      <div>
        <h1>JUSTIN DUMADAG</h1>
        <h3>Software Developer</h3>
        <Button>About me</Button><Button>Contact</Button>
      </div>
    )
  }
}
export default Homepage
