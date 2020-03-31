import React from 'react'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

import './Mission.scss'

function Mission() {
  return (
    <Container className="Mission" fluid>
      <img
        className="Mission-bg"
        src="/images/home/mounts.png"
        srcSet="/images/home/mounts@2x.png 2x, /images/home/mounts@3x.png 3x"
        alt=""
      />

      <Container>
        <div className="Mission-text">
          We build products that help blockchain and cryptocurrency investors make better decisions.
        </div>
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="sm-hidden">
                <Icon name="logo" fill="#fff" viewBox="0 0 40 40" size="40" />
              </div>
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-grey">02 / 07</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(3)}>
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

export default Mission
