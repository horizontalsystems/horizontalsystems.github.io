import React from 'react'

import Home from '../Home/Home'
import Mission from '../Mission/Mission'
import Unstoppable from '../Unstoppable/Unstoppable'
import Academy from '../Academy/Academy'
import Code from '../Code/Code'
import Team from '../Team/Team'
import Contact from '../Contact/Contact'
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
          <Unstoppable />
        </div>
        <div id="page-4">
          <Academy />
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
      </div>
    )
  }
}

export default App
