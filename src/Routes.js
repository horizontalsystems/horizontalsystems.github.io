import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home/Home'
import Team from './Team/Team'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/team" render={Team} />
        <Route path="/" render={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
