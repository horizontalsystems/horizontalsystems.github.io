import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Modal from './components/Modal/Modal'
import Team from './components/Team/Team'
import Markdown from './components/Markdown/Markdown'
import App from './components/App/App'

function Routes() {
  return (
    <BrowserRouter>
      <Modal />

      <Switch>
        <Route path="/team" render={Team} />
        <Route path="/privacy" render={() => <Markdown markdown="privacy.md" />} />
        <Route path="/" render={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
