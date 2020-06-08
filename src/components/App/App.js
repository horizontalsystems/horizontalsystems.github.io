import React from 'react'

import Home from '../Home/Home'
import Mission from '../Mission/Mission'
import Apps from '../Apps/Apps'
import Guides from '../Guides/Guides'
import Code from '../Code/Code'
import Team from '../Team/Team'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

import events from '../../core/EventEmitter'

import './App.scss'

class App extends React.Component {
  componentDidMount() {
    events.on('navigate', number => {
      const element = document.getElementById(`page-${number}`)
      if (!!element) {
        element.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  }

  componentWillUnmount() {
    events.removeAllListeners('navigate')
  }

  render() {
    return (
      <div className="App">
        <div id="page-1">
          <Home />
        </div>
        <div id="page-2">
          <Mission />
        </div>
        <div id="page-3">
          <Apps />
        </div>
        <div id="page-4">
          <Guides />
        </div>
        <div id="page-5">
          <Code />
        </div>
        <div id="page-6">
          <Team />
        </div>
        <div id="page-7">
          <Contact />
        </div>
        <div id="page-8">
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
