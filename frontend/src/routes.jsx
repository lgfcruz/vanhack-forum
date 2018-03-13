import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'

import App from './App'
import Home from './containers/home'
import About from './containers/about'
import Help from './containers/help'
import NotFound from './containers/notFound'

const history = createHashHistory()

export default props => (
    <Router history={history}>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </App>
    </Router>
)