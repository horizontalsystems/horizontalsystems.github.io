import React from 'react'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

import './Mission.scss'

function Mission() {
  return (
    <Container className="Mission-wrap" fluid>
      <img
        className="Mission-bg"
        src="/images/home/mounts.png"
        srcSet="/images/home/mounts@2x.png 2x, /images/home/mounts@3x.png 3x"
        alt=""
      />

      <Edge className="Edge-header">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="mission" fill="none" viewBox="0 0 52 52" size="52" />
                <div className="Icon-label color-steal-light">
                  Mission
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Edge>

      <Container className="Mission">
        <div className="Mission-info">
          Everything we do we believe in removing boundaries from the financial system, making markets and opportunities accessible to all. We are
          removing boundaries by building applications that provide open and unconditional access to the cryptocurrency markets.
        </div>
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <Icon name="logo" fill="#fff" viewBox="0 0 40 40" size="40" />
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-grey">02 / 07</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(3)}>
                <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" stroke="#808085" />
              </div>
            </div>
          </div>
        </Container>
      </Edge>
    </Container>
  )
}

export default Mission
