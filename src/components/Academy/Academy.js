import React from 'react'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Edge from '../Edge/Edge'
import EdgeStart from '../Edge/EdgeStart'
import EdgeEnd from '../Edge/EdgeEnd'
import Banner from '../Banner/Banner'
import events from '../../core/EventEmitter'

import './Academy.scss'

function Academy() {
  return (
    <Container className="Academy" fluid>
      <Edge className="Edge-header">
        <EdgeStart colorName="white" />
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="academy" fill="none" viewBox="0 0 62 62" size="62" />
                <div className="Icon-label color-dark">
                  Unstoppable <br />
                  Academy
                </div>
              </div>
            </div>
            <div className="Edge-content-end Edge-content-end-text color-white">
              We study what different blockchain projects are and provide them in an accessible language
            </div>
          </div>
        </Container>
      </Edge>

      <Container className="Container-flex" clipped={false}>
        <Banner text="Learn How to Become a Better Investor"
                cover="academy"
                btnText="Visit website"
                action={<button className="btn btn-dark">Visit website</button>}
                textLight />
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

        <EdgeEnd colorName="dark" />
      </Edge>
    </Container>
  )
}

export default Academy
