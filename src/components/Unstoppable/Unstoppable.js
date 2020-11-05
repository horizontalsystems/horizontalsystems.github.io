import React from 'react'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Edge from '../Edge/Edge'
import Banner from '../Banner/Banner'
import events from '../../core/EventEmitter'

import './Unstoppable.scss'

function Unstoppable() {
  return (
    <Container className="Unstoppable" fluid>
      <div className="Screen-right-half paths-grey" />

      <Edge className="Edge-header">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="unstoppable" fill="none" viewBox="0 0 55 55" size="55" />
                <div className="Icon-label color-lights">
                  Unstoppable <br />
                  Wallet
                </div>
              </div>
            </div>
            <div className="Edge-content-end Edge-content-end-text color-dark">
              Discover, store, grow while staying private.
            </div>
          </div>
        </Container>
      </Edge>

      <Container className="Container-flex" clipped={false}>
        <Banner text="Invest without borders" action={<a className="btn" href="https://unstoppable.money/">Get the App</a>} cover="uw" textLight />
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div />
            <div className="Edge-content-end">
              <div className="Edge-pagination color-white-50">03 / 07</div>
              <div className="Edge-pagination-icon sm-svg-green" onClick={() => events.navigate(4)}>
                <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" />
              </div>
            </div>
          </div>
        </Container>
      </Edge>
    </Container>
  )
}

export default Unstoppable
