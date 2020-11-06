import React from 'react'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

function Team() {
  return (
    <Container className="Mission-wrap" fluid>
      <img
        className="Mission-bg"
        src="/images/team/group.png"
        srcSet="/images/team/group@2x.png 2x, /images/team/group@3x.png 3x"
        alt=""
      />
      <div className="Mission-bg-gradient" />

      <Edge className="Edge-header">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="team-new" fill="none" viewBox="0 0 52 52" size="52" />
                <div className="Icon-label color-steal-light">
                  Team
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Edge>

      <Container className="Mission">
        <div className="Mission-info">
          Horizontal Systems is a distributed team of libertarian-minded software architects and design engineers with extensive experience in
          designing complex software systems <br /><br />

          A brief encounter with blockchain technology in 2017 quickly turned into obsession as the idea of autonomous censorship-resistant financial
          ecosystem was no longer an utopia, but a reality. Since then we have been working full-time to make use of this technology ourselves as well
          as make it more accessible for everyone else.
        </div>
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <Icon name="logo" fill="#fff" viewBox="0 0 40 40" size="40" />
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-white-50">06 / 07</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(7)}>
                <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" stroke="#808085" />
              </div>
            </div>
          </div>
        </Container>
      </Edge>
    </Container>
  )
}

export default Team
