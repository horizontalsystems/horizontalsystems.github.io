import React from 'react'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Edge from '../Edge/Edge'
import EdgeStart from '../Edge/EdgeStart'
import EdgeEnd from '../Edge/EdgeEnd'
import Slider from '../Slider/Slider'
import events from '../../core/EventEmitter'
import CardFeatured from '../Card/CardFeatured'

import uw from './uw.svg'
import soon from './coming-soon.svg'

import './Apps.scss'

class Apps extends React.Component {
  state = {
    padding: 0
  }

  componentDidMount() {
    const rect = this.content.getBoundingClientRect()
    this.setState({ padding: rect.left })
  }

  render() {
    return (
      <Container className="Apps" fluid>
        <div className="Screen-right-half paths-white" />

        <Edge className="Edge-header">
          <EdgeStart colorName="dark-steal" />
          <Container>
            <div className="Edge-content" ref={r => this.content = r}>
              <div className="Edge-content-start">
                <div className="Icon-wrap">
                  <Icon name="apps" fill="none" viewBox="0 0 52 52" size="52" />
                  <div className="Icon-label">Apps</div>
                </div>
              </div>
              <div className="Edge-content-end Edge-content-end-text color-dark">
                Independence, knowledge and privacy are the main principles behind the products we build.
              </div>
            </div>
          </Container>
        </Edge>

        <Container clipped={false}>
          <Slider slidesToScroll={1} slidesToShow={1} bgColor="light">
            <CardFeatured
              title={
                <img src={uw} alt="" />
              }
              cover="us"
              info="Privacy, independence and reliability"
            />
            <CardFeatured
              title={
                <img src={soon} alt="" />
              }
              info={<>Under the hood Lightning Network project. Will be announced once it's ready for prime time.</>}
            />
          </Slider>
        </Container>

        <Edge className="Edge-bottom">
          <Container>
            <div className="Edge-content">
              <div className="Edge-content-start" />
              <div className="Edge-content-end">
                <div className="Edge-pagination color-white-50">03 / 07</div>
                <div className="Edge-pagination-icon sm-svg-green" onClick={() => events.navigate(4)}>
                  <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" />
                </div>
              </div>
            </div>
          </Container>

          <EdgeEnd colorName="green" />
        </Edge>
      </Container>
    )
  }
}

export default Apps
