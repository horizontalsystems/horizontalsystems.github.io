import React from 'react'

import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'

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

      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start" />
            <div className="Edge-content-end">
              <span className="Edge-page color-white-50">07 / 07</span>
              <div className="Edge-next-page">
                <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" />
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
