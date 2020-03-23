import React from 'react'
import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'

import './Guides.scss'

function Guides() {
  return (
    <Container className="Guides" fluid>
      <Edge className="Edge-header">
        <div className="Edge-start bg-white" />
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="guides" fill="none" viewBox="0 0 52 56" size="52" />
                <div className="Icon-label color-steal-dark">Guides</div>
              </div>
            </div>
            <div className="Edge-content-end Edge-content-end-text color-white">
              We study what different blockchain projects are and provide them in an accessible language
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
              <span className="Edge-page color-white-50">04 / 07</span>
              <div className="Edge-next-page">
                <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" />
              </div>
            </div>
          </div>
        </Container>

        <div className="Edge-end bg-dark" />
      </Edge>
    </Container>
  )
}

export default Guides
