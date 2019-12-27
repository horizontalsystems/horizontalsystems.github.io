import React from 'react'
import Container from '../Container/Container'
import ButtonNav from '../ButtonNav/ButtonNav'
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
            <ButtonNav img="/images/team.png" text="Team" />
            <ButtonNav img="/images/office.png" text="Office" />
            <ButtonNav img="/images/github.png" text="Github" />
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
