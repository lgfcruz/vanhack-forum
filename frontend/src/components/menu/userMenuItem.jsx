import React, {Component} from 'react'

import MyPhoto from '../../images/user2-160x160.jpg'

export default class UserMenuItem extends Component {
  render() {
    return (
      <li className="dropdown user user-menu">
        <a href={`javascript:;`} className="dropdown-toggle" data-toggle="dropdown" title="Alexander Pierce">
          <img src={MyPhoto} className="user-image" alt="User"/>
          <span className="hidden-xs">Alexander Pierce</span>
        </a>
        <ul className="dropdown-menu">
          <li className="user-header">
            <img src={MyPhoto} className="img-circle" alt="User"/>
            <p>
              Alexander Pierce - Web Developer
              <small>Member since Nov. 2012</small>
            </p>
          </li>
          <li className="user-body">
            <div className="row">
              <div className="col-xs-4 text-center">
                <a href={`javascript:;`}>Followers</a>
              </div>
              <div className="col-xs-4 text-center">
                <a href={`javascript:;`}>Sales</a>
              </div>
              <div className="col-xs-4 text-center">
                <a href={`javascript:;`}>Friends</a>
              </div>
            </div>
          </li>
          <li className="user-footer">
            <div className="pull-left">
              <a href={`javascript:;`} className="btn btn-default btn-flat">Profile</a>
            </div>
            <div className="pull-right">
              <a href={`javascript:;`} className="btn btn-default btn-flat">Sign out</a>
            </div>
          </li>
        </ul>
      </li>
    )
  }
}