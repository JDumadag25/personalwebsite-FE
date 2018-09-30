import React from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component{
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return(
      <Menu>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item name='About me' active={activeItem === 'About me'} onClick={this.handleItemClick}>
          About Me
        </Menu.Item>

        <Menu.Item
          name='Projects'
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}
        >
          Projects
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
