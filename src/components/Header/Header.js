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
      <Container>
        <div className="navbar">
          <Link to="/">
            <img className="logo"
                 alt="Horizontal Systems"
                 src="/images/logo.png"
                 srcSet="/images/logo@2x.png 2x, /images/logo@3x.png 3x" />
            <img className="logo-icon" alt="Horizontal Systems" src="/images/logo-icon.png" />
          </Link>

          <div className="nav" onClick={onClickJoin}>
            <div className="nav-item">Join</div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
