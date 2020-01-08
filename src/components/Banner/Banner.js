import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import ButtonNav from '../ButtonNav/ButtonNav'
import Horse from './horse.gif'

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
            <Link to="/team">
              <ButtonNav img="/images/team.png" text="Team" icon="team" />
            </Link>
            <a href="https://www.youtube.com/watch?v=-qjzSUdeId0" target="_blank" rel="noopener noreferrer">
              <ButtonNav img="/images/office.png" text="Office" icon="office" />
            </a>
            <a href="https://github.com/horizontalsystems" target="_blank" rel="noopener noreferrer">
              <ButtonNav img="/images/github.png" text="Github" icon="github" />
            </a>
          </div>
        </div>
        <div className="banner-animation">
          <img src={Horse} className="horse" alt="Binary horse" />
        </div>
      </div>
    </Container>
  )
}

export default Banner
