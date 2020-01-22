import React from 'react'
import Container from '../Container/Container'
import horse from './horse.gif'

import './Banner.scss'

function Banner() {
  return (
    <Container>
      <div className="Banner">
        <div className="banner-info">
          <div className="banner-title">
            Join <br />
            Unstoppable <br />
            Networks <br />
          </div>
          <div className="banner-bottom">
            Get unconditional control over <br />
            your data and finances
          </div>
        </div>
        <div className="banner-animation">
          <img src={horse} className="horse" alt="Binary horse" />
        </div>
      </div>
    </Container>
  )
}

export default Banner
