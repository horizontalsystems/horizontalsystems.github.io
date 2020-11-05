import React from 'react'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

import './Team.scss'

function Team() {
  return (
    <Container className="Team" fluid>
      <Edge className="Edge-header">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="team-new" fill="none" viewBox="0 0 52 52" size="52" />
                <div className="Icon-label color-white">Team</div>
              </div>
            </div>
            <div className="Edge-content-end Edge-content-end-text color-dark">
            </div>
          </div>
        </Container>
      </Edge>

      <div className="Team-gradient" />
      <img
        className="Team-image"
        src="/images/team/group.png"
        srcSet="/images/team/group@2x.png 2x, /images/team/group@3x.png 3x"
        alt=""
      />

      <Edge className="Edge-bottom">
        <Container>s
          <div className="Edge-content">
            <div className="Edge-content-start" />
            <div className="Edge-content-end">
              <div className="Edge-pagination color-white-50">06 / 07</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(7)}>
                <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" />
              </div>
            </div>
          </div>
        </Container>
      </Edge>
    </Container>
  )
}

export default Team
