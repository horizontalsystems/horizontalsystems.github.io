import React from 'react'

import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

import './Join.scss'

function Join() {
  return (
    <Container className="Join bg-steal-dark" fluid>
      <Edge className="Edge-header">
        <div className="Edge-start bg-dark" />
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="join" fill="none" viewBox="0 0 56 52" size="52" />
                <div className="Icon-label color-white">Join Us</div>
              </div>
            </div>
            <div className="Edge-content-end" />
          </div>
        </Container>
      </Edge>

      <Container>
        <div className="Join-form-wrap">
          <form className="Join-form" action="/">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Name" />

            <button type="submit" className="btn">Join</button>

            <div className="Join-links">
              <div className="Join-link"><Icon name="mail" viewBox="0 0 18 18" /> Email</div>
              <div className="Join-link"><Icon name="telegram" viewBox="0 0 20 17" /> Live Chat</div>
              <div className="Join-link"><Icon name="github" viewBox="0 0 22 21" stroke="#fff" /> Github</div>
            </div>
          </form>
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
