import React from 'react'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import Icon from '../Icon/Icon'
import EdgeEnd from '../Edge/EdgeEnd'
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

      <Container className="Mission">
        <div className="Mission-title">
          Our products help crypto investors make better decisions.
        </div>
        <div className="Mission-apps">
          <div className="Mission-app">
            <div className="Mission-app-head">
              <Icon name="apps" fill="none" viewBox="0 0 32 32" size="32" />
              <div className="Mission-app-title">Wallet</div>
            </div>
            <div className="Mission-app-info">
              Store, monitor, trade and grow crypto assets independently.
            </div>
          </div>
          <div className="Mission-app">
            <div className="Mission-app-head">
              <Icon name="guides" fill="none" viewBox="0 0 32 32" size="32" />
              <div className="Mission-app-title">Academy</div>
            </div>
            <div className="Mission-app-info">
              Master fundamentals and learn about crypto projects in simple terms.
            </div>
          </div>
          <div className="Mission-app">
            <div className="Mission-app-head">
              <Icon name="code" fill="none" viewBox="0 0 32 32" size="32" />
              <div className="Mission-app-title">Code</div>
            </div>
            <div className="Mission-app-info">
              Contribute, improve and reuse our code unconditionally.
            </div>
          </div>
        </div>
      </Container>

      <Edge className="Edge-bottom sm-hidden">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div>
                <Icon name="logo" fill="#fff" viewBox="0 0 40 40" size="40" />
              </div>
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-grey">02 / 07</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(3)}>
                <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" stroke="#05C46B" />
              </div>
            </div>
          </div>
        </Container>

        <EdgeEnd colorName="white" />
      </Edge>
    </Container>
  )
}

export default Mission
