import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Login, BookSearch, SinglePageView, Results} from './components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/Home" component={BookSearch} />
        <Route path="/Results" component={Results} />
        <Route path="/singleBook" component={SinglePageView} />
        <Route component={Login} />
      </Switch>
    )
  }
}

export default withRouter(connect(null, null)(Routes))
