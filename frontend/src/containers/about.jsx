import React, {Component} from 'react'
import { connect } from 'react-redux'

import { showBreadcrumbs } from '../actions/breadcrumb'

import Content from '../components/content'

class About extends Component {
  
  componentWillMount() {
    this.props.dispatch(showBreadcrumbs("About"))
  }

  render() {
    return (
      <div>
        <Content.Header title="About" />
        <Content>
          About
        </Content>
      </div>
    )
  }
}

export default connect(state => state)(About)