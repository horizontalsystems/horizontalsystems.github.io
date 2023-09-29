import React from 'react'
import { useParallax } from 'react-scroll-parallax'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'

import './Mission.scss'

function Mission() {
  const parallax = useParallax({
    translateY: [0, 30],
    scale: [1, 1.5, 'easeOutCubic'],
  })

  return (
    <Container className="Mission-wrap" fluid>
      <img
        className="Mission-bg"
        src="/images/home/mounts.png"
        srcSet="/images/home/mounts@2x.png 2x, /images/home/mounts@3x.png 3x"
        ref={parallax.ref}
        onLoad={() => parallax.controller.update()}
        alt=""
      />

      <Edge className="Edge-header">
        <Container className="d-flex justify-content-center">
          <div className="Edge-title color-green">
            Mission
          </div>
        </Container>
      </Edge>

      <Container className="Edge-center">
        <div className="Edge-text color-steal-light">
          We strive to eliminate boundaries by creating applications that grant unconditional access to money and opportunities.
        </div>
      </Container>

      <Edge className="Edge-bottom" />
    </Container>
  )
}

export default Mission
