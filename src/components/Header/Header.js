import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

import './Header.scss'

function Header({ navigate = true }) {
  const closeRef = useRef()
  const toggleRef = useRef()
  const dropdownRef = useRef()

  let dropdown = false

  const onToggleMenu = () => {
    const close = closeRef.current
    const toggle = toggleRef.current
    const dropdownNav = dropdownRef.current

    if (dropdown) {
      dropdownNav.style.display = 'none'
      close.style.display = 'none'
      toggle.style.display = 'block'
    } else {
      dropdownNav.style.display = 'block'
      close.style.display = 'block'
      toggle.style.display = 'none'
    }

    dropdown = !dropdown
  }

  const onClickMenu = page => {
    onToggleMenu()

    dropdownRef.current.style.display = 'none'

    if (navigate) {
      events.navigate(page)
    } else {
      window.location.href = `/#page-${page}`;
    }
  }

  const navigation = (
    <div className="nav">
      <div className="nav-item" onClick={() => onClickMenu(3)}>Projects</div>
      <div className="nav-item" onClick={() => onClickMenu(4)}>Code</div>
      <div className="nav-item" onClick={() => onClickMenu(5)}>Team</div>
      <div className="nav-item" onClick={() => onClickMenu(6)}>Contact</div>
    </div>
  )

  return (
    <header className="Header">
      <Container>
        <div className="navbar">
          <Link to="/">
            <img
              className="Logo"
              alt="Horizontal Systems"
              src="/images/logo.png"
              srcSet="/images/logo@2x.png 2x, /images/logo@3x.png 3x"
            />

            <div className="Logo-icon">
              <Icon name="logo" fill="#05C46B" viewBox="0 0 40 40" size="40" />
            </div>
          </Link>

          <div className="hide-on-mobile">
            {navigation}
          </div>

          <div className="Menu-wrap" onClick={onToggleMenu}>
            <div className="Menu-close" ref={closeRef}>
              <Icon name="menu-close" viewBox="0 0 26 26" />
            </div>
            <div className="Menu-toggle" ref={toggleRef}>
              <Icon name="menu" viewBox="0 0 30 30" />
            </div>
          </div>
        </div>
      </Container>
      <div className="Header-collapse">
        <div className="Header-collapse-menu" ref={dropdownRef}>
          {navigation}
        </div>
      </div>
    </header>
  )
}

export default Header
