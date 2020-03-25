import React from 'react'

import Home from '../Home/Home'
import Mission from '../Mission/Mission'
import Apps from '../Apps/Apps'
import Guides from '../Guides/Guides'
import Code from '../Code/Code'
import Team from '../Team/Team'
import Join from '../Join/Join'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Home />
      <Mission />
      <Apps />
      <Guides />
      <Code />
      <Team />
      <Join />
    </div>
  )
}

export default App
