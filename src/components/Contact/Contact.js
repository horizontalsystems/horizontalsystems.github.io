import React from 'react'

import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import EdgeStart from '../Edge/EdgeStart'
import EdgeEnd from '../Edge/EdgeEnd'
import ContactForm from './ContactForm'
import events from '../../core/EventEmitter'

import './Contact.scss'

function Contact() {
  return (
    <Container className="Contact" fluid>
      <div className="Screen-right-half paths-white" />

      <Edge className="Edge-header">
        <EdgeStart colorName="dark" />
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="join" fill="none" viewBox="0 0 56 52" size="52" />
                <div className="Icon-label color-white">Contact</div>
              </div>
            </div>
            <div className="Edge-content-end" />
          </div>
        </Container>
      </Edge>

      <Container>
        <div className="Join-form-wrap">
          <ContactForm formId="2166978" formCode="d8h6h7" />
        </div>
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Contact-links">
                <div className="Contact-links-title">
                  Follow us
                </div>
                <div className="Contact-links-icons">
                  <a href="mailto:hsdao@protonmail.ch">
                    <div className="Contact-link">
                      <Icon name="twitter" viewBox="0 0 16 14" />
                    </div>
                  </a>
                  <a href="mailto:hsdao@protonmail.ch">
                    <div className="Contact-link">
                      <Icon name="mail" viewBox="0 0 18 18" />
                    </div>
                  </a>
                  <a href="https://t.me/unstoppable_wallet">
                    <div className="Contact-link">
                      <Icon name="telegram" viewBox="0 0 20 17" />
                    </div>
                  </a>
                  <a href="https://github.com/horizontalsystems">
                    <div className="Contact-link">
                      <Icon name="github" viewBox="0 0 22 21" stroke="#fff" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-white-50">07 / 07</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(1)}>
                <Icon className="arrow-up" name="arrow-down" viewBox="0 0 36 36" fill="none" />
              </div>
            </div>
          </div>
        </Container>

        <EdgeEnd colorName="dark" />
      </Edge>
    </Container>
  )
}

export default Contact
