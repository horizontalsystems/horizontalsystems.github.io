import React from 'react'
import { useParallax } from 'react-scroll-parallax'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import Icon from '../Icon/Icon'

function Team() {
  const parallax = useParallax({
    translateY: [0, 30],
    scale: [1, 1.5, 'easeOutCubic'],
  })

  return (
    <Container className="Mission-wrap" fluid>
      <img
        className="Mission-bg"
        src="/images/team/group.png"
        srcSet="/images/team/group@2x.png 2x, /images/team/group@3x.png 3x"
        ref={parallax.ref}
        onLoad={() => parallax.controller.update()}
        alt=""
      />
      <div className="Mission-bg-gradient" />

      <Edge className="Edge-header">
        <Container className="d-flex justify-content-center">
          <div className="Edge-title color-green">
            About us
          </div>
        </Container>
      </Edge>

      <Container className="Mission">
        <div className="Mission-info">
          Horizontal Systems is a distributed team of libertarian-minded software architects and design engineers with extensive experience in
          designing complex software systems
        </div>
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="text-center">
            <Icon name="logo" fill="#fff" viewBox="0 0 40 40" size="40" />
          </div>
        </Container>
      </Edge>
    </Container>
  )
}

export default Team
