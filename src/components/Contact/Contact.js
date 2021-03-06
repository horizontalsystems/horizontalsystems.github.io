import React from 'react'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import Icon from '../Icon/Icon'
import SubscribeForm from './SubscribeFormModal'
import events from '../../core/EventEmitter'

import Mail from './mail.svg'
import Twitter from './twitter.svg'
import Github from './github.svg'
import Newsletter from './newsletter.svg'

import './Contact.scss'

function Contact() {
  const openForm = () => {
    events.showModal(<SubscribeForm formId="2166978" formCode="d8h6h7" onClose={events.hideModal} />)
  }

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

      <Container className="Contacts-section">
        <div className="Contacts">
          <div className="Contact-item">
            <a className="Contact-item-head" href="mailto:hsdao@protonmail.com">
              <img src={Mail} alt="" />
              <div className="Contact-item-title">hsdao@protonmail.com</div>
            </a>
            <div className="Contact-item-info">
              Would like to connect? Contact our team via email.
            </div>
          </div>
          <div className="Contact-item">
            <a className="Contact-item-head" href="https://twitter.com/HorizontalHQ" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="" />
              <div className="Contact-item-title">Twitter</div>
            </a>
            <div className="Contact-item-info">
              Follow latest updates and send DMs on Twitter.
            </div>
          </div>
          <div className="Contact-item">
            <a className="Contact-item-head" href="https://github.com/horizontalsystems" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="" />
              <div className="Contact-item-title">Github</div>
            </a>
            <div className="Contact-item-info">
              Report product issues and suggest improvements.
            </div>
          </div>
          <div className="Contact-item">
            <div className="Contact-item-head" onClick={openForm}>
              <img src={Newsletter} alt="" />
              <div className="Contact-item-title">Newsletter</div>
            </div>
            <div className="Contact-item-info">
              Subscribe to our newsletter for exclusive updates.
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
