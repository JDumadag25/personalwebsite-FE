import React from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, NavLink, Route, Redirect, Switch, Link, withRouter} from 'react-router-dom'

class NavBar extends React.Component{
  //as={Link} to='/'
  state = {}

  handleItemClick = (e, { name }) => this.setState({
    activeItem: name
  })


  render(){
    const { activeItem } = this.state
    return(


      <Menu inverted fixed='top'>
        <Menu.Item

          name='Home'
          active={activeItem === 'Home'}
          onClick={this.props.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item

          name='About me'
          active={activeItem === 'About me'}

          onClick={this.props.handleScrollToggle}
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

          name='Blog'
          active={activeItem === 'Blog'}
          onClick={this.handleItemClick}
        >
          Blogs
        </Menu.Item>

        <Menu.Item

          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        >
          Contact
        </Menu.Item>
      </Menu>


    )
  }
}

export default NavBar
