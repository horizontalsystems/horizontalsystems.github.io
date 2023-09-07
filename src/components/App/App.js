import React, { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import Home from '../Home/Home'
import Mission from '../Mission/Mission'
import Projects from '../Projects/Projects'
import Code from '../Code/Code'
import Team from '../Team/Team'
import Contact from '../Contact/Contact'
import events from '../../core/EventEmitter'

import './App.scss'

function App() {

  useEffect(() => {
    events.on('navigate', number => {
      const element = document.getElementById(`page-${number}`)
      if (!!element) {
        element.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  }, [])

  return (
    <ParallaxProvider>
      <div id="page-1">
        <Home />
      </div>
      <div id="page-2">
        <Mission />
      </div>
      <div id="page-3">
        <Projects />
      </div>
      <div id="page-4">
        <Code />
      </div>
      <div id="page-5">
        <Team />
      </div>
      <div id="page-6">
        <Contact />
      </div>
    </ParallaxProvider>
  )
}

export default App
