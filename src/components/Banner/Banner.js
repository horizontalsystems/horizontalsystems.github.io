import React from 'react'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

import './Banner.scss'

function Banner() {
  return (
    <Container>
      <div className="Banner">
        <div className="Banner-title">
          Solutions for Smart <br />
          Investments
        </div>
      </div>
      <div className="Banner-desc">
        Inspiring borderless investments by guiding investor <br />
        through blockchain techs
      </div>

      <div className="Page-down" onClick={() => events.navigate(2)}>
        <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" stroke="#05C46B" />
      </div>
    </Container>
  )
}

export default Banner
