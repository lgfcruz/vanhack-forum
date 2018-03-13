import React, {Component} from 'react'
import { connect } from 'react-redux'

import { showBreadcrumbs } from '../actions/breadcrumb'

import Content from '../components/content'

class Home extends Component {
  
  componentWillMount() {
    this.props.dispatch(showBreadcrumbs())
  }

  render() {
    return (
      <div>
        <Content.Header title="Home" />
        <Content>
          Home
        </Content>
      </div>
    )
  }
}

export default connect(state => state)(Home)