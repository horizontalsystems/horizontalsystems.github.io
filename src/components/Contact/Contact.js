import React from 'react'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

import { ReactComponent as Hs } from './hs.svg'
import { ReactComponent as Mail } from './mail.svg'
import { ReactComponent as Uw } from './uw.svg'
import { ReactComponent as UDev } from './udev.svg'
import { ReactComponent as Twitter } from './twitter.svg'
import { ReactComponent as Github } from './github.svg'
import { ReactComponent as Youtube } from './youtube.svg'
import { ReactComponent as Newsletter } from './newsletter.svg'

import './Contact.scss'

function Contact() {
  return (
    <Container className="Contact" fluid>
      <div className="Screen-right-half paths-grey" />

      <Edge className="Edge-header">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="join" fill="none" viewBox="0 0 56 52" size="52" />
                <div className="Icon-label color-steal-light">Contacts</div>
              </div>
            </div>
          </div>
        </Container>
      </Edge>

      <Container>
        <div className="Contacts-section">
          <div className="Contacts-head">Contact Us</div>
          <div className="Contacts">
            <div className="Contact-item">
              <div className="Contact-item-head">
                <Hs />
                <div className="Contact-item-title">HorizontalSystems</div>
              </div>
              <div className="Contact-item-info">
                A decentralized multi-blockchain wallet for Bitcoin and other cryptocurrencies.
              </div>
            </div>
            <div className="Contact-item">
              <div className="Contact-item-head">
                <Mail />
                <div className="Contact-item-title">Hsdao@protonmail.ch</div>
              </div>
              <div className="Contact-item-info">
                A decentralized multi-blockchain wallet for Bitcoin and other cryptocurrencies.
              </div>
            </div>
            <div className="Contact-item">
              <div className="Contact-item-head">
                <Uw />
                <div className="Contact-item-title">UnstoppableWallet</div>
              </div>
              <div className="Contact-item-info">
                A decentralized multi-blockchain wallet for Bitcoin and other cryptocurrencies.
              </div>
            </div>
            <div className="Contact-item">
              <div className="Contact-item-head">
                <UDev />
                <div className="Contact-item-title">Unstoppable Development</div>
              </div>
              <div className="Contact-item-info">
                A decentralized multi-blockchain wallet for Bitcoin and other cryptocurrencies.
              </div>
            </div>
          </div>
        </div>
        <div className="Contacts-section">
          <div className="Contacts-head">Follow Us</div>
          <div className="Contacts">
            <div className="Contact-item">
              <div className="Contact-item-head">
                <Twitter />
                <div className="Contact-item-title">on Twitter</div>
              </div>
              <div className="Contact-item-info">
                A decentralized multi-blockchain wallet for Bitcoin and other cryptocurrencies.
              </div>
            </div>
            <div className="Contact-item">
              <div className="Contact-item-head">
                <Github />
                <div className="Contact-item-title">on Github</div>
              </div>
              <div className="Contact-item-info">
                A decentralized multi-blockchain wallet for Bitcoin and other cryptocurrencies.
              </div>
            </div>
            <div className="Contact-item">
              <div className="Contact-item-head">
                <Youtube />
                <div className="Contact-item-title">on Youtube</div>
              </div>
              <div className="Contact-item-info">
                A decentralized multi-blockchain wallet for Bitcoin and other cryptocurrencies.
              </div>
            </div>
            <div className="Contact-item">
              <div className="Contact-item-head">
                <Newsletter />
                <div className="Contact-item-title">Our Newsletter</div>
              </div>
              <div className="Contact-item-info">
                A decentralized multi-blockchain wallet for Bitcoin and other cryptocurrencies.
              </div>
            </div>
          </div>
        </div>

      </Container>

      <Edge className="Edge-bottom sm-hidden">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start" />
            <div className="Edge-content-end">
              <div className="Edge-pagination-icon" onClick={() => events.navigate(1)}>
                <Icon className="arrow-up" name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" stroke="#05C46B" />
              </div>
            </div>
          </div>
        </Container>
      </Edge>
    </Container>
  )
}

export default Contact
