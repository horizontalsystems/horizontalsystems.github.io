import React from 'react'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import Icon from '../Icon/Icon'

import './Team.scss'

function Team() {
  return (
    <Container className="Team" fluid>
      <Edge className="Edge-header">
        <div className="Edge-start bg-dark" />
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="team-new" fill="none" viewBox="0 0 52 52" size="52" />
                <div className="Icon-label color-whites">Team</div>
              </div>
            </div>
            <div className="Edge-content-end Edge-content-end-text color-dark">
              We believe open blockchain are at the verge of fundamentally transforming global finance.
            </div>
          </div>
        </Container>
      </Edge>

      <Container>

      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start" />
            <div className="Edge-content-end">
              <div className="Edge-pagination color-white-50">06 / 07</div>
              <div className="Edge-pagination-icon">
                <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" />
              </div>
            </div>
          </div>
        </Container>

        <div className="Edge-end bg-green" />
      </Edge>
    </Container>
  )
}

export default Team
