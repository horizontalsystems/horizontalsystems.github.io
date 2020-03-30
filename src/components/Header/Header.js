import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

import './Header.scss'

class Header extends React.Component {

  render() {
    let dropdown = false

    const onToggleMenu = () => {
      const close = this.menuClose
      const toggle = this.menuToggle
      const dropdownNav = this.dropdownNav

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
      this.dropdownNav.style.display = "none"
      events.navigate(page)
    }

    const navigation = (
      <div className="nav">
        <div className="nav-item"><Link to="/" onClick={() => onClickMenu(3)}>Apps</Link></div>
        <div className="nav-item"><Link to="/" onClick={() => onClickMenu(4)}>Guides</Link></div>
        <div className="nav-item"><Link to="/" onClick={() => onClickMenu(5)}>Code</Link></div>
        <div className="nav-item"><Link to="/" onClick={() => onClickMenu(6)}>Teams</Link></div>
        <div className="nav-item nav-item-btn" onClick={() => onClickMenu(7)}>Join</div>
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

            {navigation}

            <div className="Menu-wrap" onClick={onToggleMenu}>
              <div className="Menu-close" ref={r => this.menuClose = r}>
                <Icon name="menu-close" viewBox="0 0 26 26" />
              </div>
              <div className="Menu-toggle" ref={r => this.menuToggle = r}>
                <Icon name="menu" viewBox="0 0 30 30" />
              </div>
            </div>
          </div>
        </Container>
        <div className="navbar-dropdown" ref={r => this.dropdownNav = r}>
          {navigation}
        </div>
      </header>
    )
  }
}


export default Header
