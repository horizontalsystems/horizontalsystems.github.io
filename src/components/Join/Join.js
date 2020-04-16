import React from 'react'

import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'
import JoinForm from './JoinForm'

import './Join.scss'

function Join() {
  return (
    <Container className="Join bg-steal-dark" fluid>
      <div className="Screen-left-half paths-green" />

      <Edge className="Edge-header">
        <div className="Edge-start bg-dark" />
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="join" fill="none" viewBox="0 0 56 52" size="52" />
                <div className="Icon-label color-white">Newsletter</div>
              </div>
            </div>
            <div className="Edge-content-end Edge-content-end-text color-white">
              Subscribe to our newsletter to get new products, guides and cheat sheets when they are published.
            </div>
          </div>
        </Container>
      </Edge>

      <Container>
        <div className="Join-form-wrap">
          <JoinForm />
        </div>
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start" />
            <div className="Edge-content-end">
              <div className="Edge-pagination color-white-50">07 / 07</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(1)}>
                <Icon className="arrow-up" name="arrow-down" viewBox="0 0 28 28" fill="none" />
              </div>
            </div>
          </div>
        </Container>

        <div className="Edge-end bg-dark" />
      </Edge>
    </Container>
  )
}

export default Join
