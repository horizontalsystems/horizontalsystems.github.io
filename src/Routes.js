import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Markdown from './components/Markdown/Markdown'
import App from './components/App/App'
import Modal from './components/Modal/Modal'
import CookieConsent from './components/CookieConsent/CookieConsent'

function Routes() {
  return (
    <BrowserRouter>
      <Modal />
      <CookieConsent />

      <Switch>
        <Route path="/privacy" render={() => <Markdown markdown="privacy.md" />} />
        <Route path="/" component={App} />
      </Switch>

    </BrowserRouter>
  )
}

export default Routes
