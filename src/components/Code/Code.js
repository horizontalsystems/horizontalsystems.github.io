import React from 'react'

import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'

import './Code.scss'

function Code() {
  return (
    <Container className="bg-steal-dark" fluid>
      <Edge className="Edge-header">
        <div className="Edge-start bg-green" />
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="code" fill="none" viewBox="0 0 52 52" size="52" />
                <div className="Icon-label color-steal-dark">Code</div>
              </div>
            </div>
            <div className="Edge-content-end Edge-content-end-text color-white">
              We are indeptedly grateful to the army of open source blockchain engeineers thet contributed to the
              emergence of decentralized systems
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
              <span className="Edge-page color-dark">05 / 07</span>
              <div className="Edge-next-page">
                <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" stroke="#05C46B" />
              </div>
            </div>
          </div>
        </Container>

        <div className="Edge-end bg-white" />
      </Edge>
    </Container>
  )
}

export default Code
