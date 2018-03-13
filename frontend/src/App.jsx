import React, {Component} from 'react'
import './components/layout/dependencies'
import './App.css'

import Header from './components/header'
import Siderbar from './components/siderbar'
import Footer from './components/footer'

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Siderbar />
        <div className="content-wrapper">
            {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App