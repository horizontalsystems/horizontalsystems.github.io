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
        <div className="Edge-start bg-dark" />
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="team-new" fill="none" viewBox="0 0 52 52" size="52" />
                <div className="Icon-label color-white">Team</div>
              </div>
            </div>
            <div className="Edge-content-end Edge-content-end-text color-dark">
              We believe open blockchains are at the verge of fundamentally transforming the global finance. We are here to facilitate and benefit from that transformation.
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
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start" />
            <div className="Edge-content-end">
              <div className="Edge-pagination color-white-50">06 / 07</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(7)}>
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
