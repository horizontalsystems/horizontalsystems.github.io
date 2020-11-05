import React from 'react'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Edge from '../Edge/Edge'
import Banner from '../Banner/Banner'
import events from '../../core/EventEmitter'

import './Academy.scss'

function Academy() {
  return (
    <Container className="Academy" fluid>
      <Edge className="Edge-header">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div>
                <Icon name="litrex" width="138" height="40" viewBox="0 0 138 40" />
              </div>
            </div>
          </div>
        </Container>
      </Edge>

      <Container className="Container-flex" clipped={false}>
        <Banner text="Comprehensive and Easy" cover="academy" btnText="Visit website" action={<button className="btn btn-dark">Visit website</button>} textLight />
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div />
            <div className="Edge-content-end">
              <div className="Edge-pagination color-white-50">04 / 07</div>
              <div className="Edge-pagination-icon sm-svg-green" onClick={() => events.navigate(5)}>
                <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" />
              </div>
            </div>
          </div>
        </Container>
      </Edge>
    </Container>
  )
}

export default Academy
