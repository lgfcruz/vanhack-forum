import React, {Component} from 'react'

import Menu from './menu'

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <a href="/" className="logo">
          <span className="logo-mini"><b>V</b>F</span>
          <span className="logo-lg"><b>Vanhack</b> Forum</span>
        </a>
        <nav className="navbar navbar-static-top">
          <a href={`javascript:;`} className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          <Menu/>
        </nav>
      </header>
    )
  }
}