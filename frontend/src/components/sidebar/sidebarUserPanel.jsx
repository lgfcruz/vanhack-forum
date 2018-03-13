import React, {Component} from 'react'

import MyPhoto from '../../images/user2-160x160.jpg'

export default class SidebarUserPanel extends Component {
  render() {
    return (
      <div className="user-panel">
        <div className="pull-left image">
          <img src={MyPhoto} className="img-circle" alt="User"/>
        </div>
        <div className="pull-left info">
          <p>Alexander Pierce</p>
          <a href={`javascript:;`}>
            <i className="fa fa-circle text-success"></i>
            Online</a>
        </div>
      </div>
    )
  }
}