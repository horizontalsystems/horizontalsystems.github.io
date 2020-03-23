import React from 'react'

import Icon from '../Icon/Icon'
import Edge from '../Edge/Edge'
import Container from '../Container/Container'

import './Apps.scss'

function Apps() {
  return (
    <Container className="Apps" fluid>
      <Edge className="Edge-header">
        <div className="Edge-start bg-steal-dark" />
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="apps" fill="none" viewBox="0 0 52 52" size="52" />
                <div className="Icon-label">Apps</div>
              </div>
            </div>
            <div className="Edge-content-end Edge-content-end-text color-dark">
              Only you can manage your funds. Privacy, independence and reliability are the main principles of our
              products Only you can manage your funds.
            </div>
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
              <span className="Edge-page color-white-50">03 / 07</span>
              <div className="Edge-next-page">
                <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" />
              </div>
            </div>
          </div>
        </Container>

        <div className="Edge-end bg-green" />
      </Edge>
    </Container>
  )
}

export default Apps
