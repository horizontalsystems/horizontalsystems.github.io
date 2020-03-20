import React from 'react'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'

import './Banner.scss'

function Banner() {
  return (
    <Container>
      <div className="Banner">
        <div className="Slogan">
          Solutions for Smart <br />
          Investments
        </div>
      </div>
      <div className="Mission">
        Inspiring borderless investments by guiding investor <br />
        through blockchain techs
      </div>

      <div className="Page-down">
        <Icon name="arrow-down" viewBox="0 0 28 28" color="none" />
      </div>
    </Container>
  )
}

export default Banner
