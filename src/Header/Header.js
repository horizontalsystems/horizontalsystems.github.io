import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import './Header.scss'

function Header() {
  return (
    <header className="Header">
      <Container>
        <div className="navbar">
          <Link to="/">
            <img className="logo" alt="Horizontal Systems"
                 src="/images/logo.png"
                 srcSet="/images/logo@2x.png 2x, /images/logo@3x.png 3x" />
          </Link>

          <div className="nav">
            <div className="nav-item">Join</div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
