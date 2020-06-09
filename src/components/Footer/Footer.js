import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../Icon/Icon'
import Container from '../Container/Container'
import SubscribeForm from '../Contact/SubscribeForm'
import events from '../../core/EventEmitter'

import './Footer.scss'

class Footer extends React.Component {

  render() {
    return (
      <header className="Footer">
        <Container>
          <div className="Footer-top">
            <div className="Footer-nav">
              <div className="Footer-nav-item" onClick={() => events.navigate(2)}>What we do</div>
              <div className="Footer-nav-item" onClick={() => events.navigate(3)}>Wallet</div>
              <div className="Footer-nav-item" onClick={() => events.navigate(4)}>Academy</div>
              <div className="Footer-nav-item" onClick={() => events.navigate(5)}>Code</div>
              <div className="Footer-nav-item" onClick={() => events.navigate(6)}>Team</div>
              <div className="Footer-nav-item" onClick={() => events.navigate(7)}>Contact</div>
            </div>
            <div className="Footer-subscribe">
              <SubscribeForm formCode="m3g0e6" formId="1561498" />
              <div className="Footer-subscribe-info">
                Subscribe to our newsletter to get new products, guides and cheat sheets when they are published.
              </div>
            </div>
          </div>

          <hr className="Divider" />

          <div className="Footer-bottom">
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

            <a href="mailto:hsdao@protonmail.ch">hsdao@protonmail.ch</a>
          </div>
        </Container>
      </header>
    )
  }
}

export default Footer
