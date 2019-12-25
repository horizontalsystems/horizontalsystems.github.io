import React from 'react'
import Container from '../Container/Container'
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
            <div className="banner-nav">
              <img src="/images/team.png" alt="" /> Team
            </div>
            <div className="banner-nav">
              <img src="/images/office.png" alt="" /> Office
            </div>
            <div className="banner-nav">
              <img src="/images/github.png" alt="" /> Github
            </div>
          </div>
        </div>
        <div className="banner-animation">
          <img src="/images/horse.gif" alt="Binary horse" className="horse" />
        </div>
      </div>
    </Container>
  )
}

export default Banner
