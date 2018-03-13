import React, {Component} from 'react'

import MenuItem from './menu/menuItem'
import UserMenuItem from './menu/userMenuItem'

export default class Menu extends Component {
  render() {
    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
        
          <MenuItem icon="question-circle" className="help-menu">

            <MenuItem.SubItem key={1} label="About" icon="info-circle" iconColor="aqua" href="about" />
            <MenuItem.SubItem key={2} label="Help" icon="question-circle" iconColor="blue" href="help" />

          </MenuItem>

          <UserMenuItem />
        </ul>
      </div>
    )
  }
}