import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Modal from './components/Modal/Modal'
import Home from './components/Home/Home'
import Team from './components/Team/Team'

function Routes() {
  return (
    <BrowserRouter>
      <Modal />

      <Switch>
        <Route path="/team" render={Team} />
        <Route path="/" render={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
