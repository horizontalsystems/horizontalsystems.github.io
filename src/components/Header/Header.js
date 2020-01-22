import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../Container/Container'
import Subscribe from '../Subscribe/Subscribe'
import './Header.scss'

import events from '../../core/EventEmitter.js'

function Header() {
  const onClickJoin = () => events.showModal(<Subscribe />)

  return (
    <header className="Header">
      <Container className="Banner-header">
        <div className="navbar">
          <Link to="/">
            <img className="logo"
                 alt="Horizontal Systems"
                 src="/images/logo.png"
                 srcSet="/images/logo@2x.png 2x, /images/logo@3x.png 3x" />
          </Link>

          <div className="nav">
            <div className="nav-item">
              <Link to="/team">Team</Link>
            </div>
            <div className="nav-item">
              <a href="https://www.youtube.com/watch?v=-qjzSUdeId0" target="_blank" rel="noopener noreferrer">Office</a>
            </div>
            <div className="nav-item">
              <a href="https://github.com/horizontalsystems" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
            <div className="nav-item nav-item-btn" onClick={onClickJoin}>Join</div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
