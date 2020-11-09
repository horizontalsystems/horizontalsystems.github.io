import React from 'react'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Edge from '../Edge/Edge'
import Banner from '../Banner/Banner'
import events from '../../core/EventEmitter'
import { ReactComponent as ArrowRight } from '../Icon/arrow-right.svg'

import './Academy.scss'

function Academy() {
  return (
    <Container className="Academy" fluid>
      <Edge className="Edge-header">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <Icon name="litrex" width="138" height="40" viewBox="0 0 138 40" />
            </div>
          </div>
        </Container>
      </Edge>

      <Container className="Container-flex" clipped={false}>
        <Banner
          text="Learn cryptocurrency"
          info={
            <>
              To this day, cryptocurrencies and blockchain technology powering them are still mostly misunderstood and unappreciated <br /><br />
              Litrex Academy is our attempt to explain Why, How and What aspects of cryptocurrencies and decentralized finance technologies in an
              accessible manner.
            </>
          }
          cover="academy"
          textLight />
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <a className="Edge-icon-link" href="http://litrex.academy" target="_blank" rel="noopener noreferrer">
                Visit website <ArrowRight className="pl-18" />
              </a>
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-white-50">04 / 07</div>
              <div className="Edge-pagination-icon sm-svg-green" onClick={() => events.navigate(5)}>
                <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" stroke="#808085" />
              </div>
            </div>
          </div>
        </Container>
      </Edge>
    </Container>
  )
}

export default Academy
