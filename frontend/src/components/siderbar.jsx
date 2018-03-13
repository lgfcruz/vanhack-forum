import React, {Component} from 'react'

import SidebarUserPanel from './sidebar/sidebarUserPanel'
import SidebarSearch from './sidebar/sidebarSearch'
import SidebarMenu from './sidebar/sidebarMenu'

export default class Siderbar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
            <SidebarUserPanel />
            <SidebarSearch />
            <SidebarMenu>
                <SidebarMenu.Item label="Home" icon="home" href="/" />
                <SidebarMenu.Item label="item2" href="/" />
                <SidebarMenu.Item label="item3" href="/" />
                <SidebarMenu.Tree label="com submenu">
                    <SidebarMenu.Item label="sub.item3.1" href="/" />
                    <SidebarMenu.Item label="sub.item3.2" href="/" />
                    <SidebarMenu.Item label="sub.item3.3" href="/" />
                </SidebarMenu.Tree>
            </SidebarMenu>
        </section>
      </aside>
    )
  }
}