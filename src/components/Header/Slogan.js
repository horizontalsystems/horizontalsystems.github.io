import React from 'react'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

import './Slogan.scss'

function Slogan() {
  return (
    <Container>
      <div className="Slogan">
        <div className="Slogan-title">
          Solutions for Smart <br />
          Investments
        </div>
        <div className="Page-down" onClick={() => events.navigate(2)}>
          <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" stroke="#05C46B" />
        </div>
      </div>
    </Container>
  )
}

export default Slogan
