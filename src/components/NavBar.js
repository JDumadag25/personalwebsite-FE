import React from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect, Switch, Link, withRouter} from 'react-router-dom'

class NavBar extends React.Component{
  state = {}

  handleItemClick = (e, { name }) => this.setState({
    activeItem: name
  })

  render(){
    const { activeItem } = this.state
    return(
    <Router>
      <Menu>
        <Menu.Item
          as={ Link } name='home' to='home'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={ Link } name='aboutme' to='/aboutme'
          name='About me'
          active={activeItem === 'About me'}
          onClick={this.handleItemClick}
          >
          About Me
        </Menu.Item>

        <Menu.Item
          name='Projects'
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}
        >
          Projects
        </Menu.Item>

        <Menu.Item
          name='Resume'
          active={activeItem === 'Resume'}
          onClick={this.handleItemClick}
        >
          Resume
        </Menu.Item>

        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        >
          Contact
        </Menu.Item>
      </Menu>
      </Router>
    )
  }
}

export default NavBar
