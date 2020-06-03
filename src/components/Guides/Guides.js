import React from 'react'
import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'

import CardGuide from '../Card/CardGuide'
import Slider from '../Slider/Slider'
import ContactForm from '../Contact/ContactForm'
import EdgeStart from '../Edge/EdgeStart'
import EdgeEnd from '../Edge/EdgeEnd'

import events from '../../core/EventEmitter'

import './Guides.scss'

class Guides extends React.Component {
  showGuide = name => {
    let images = []
    switch (name) {
      case 'libra': {
        images = [
          { src: '/images/libra/01.png', opts: { thumb: '/images/libra/01.png' } },
          { src: '/images/libra/02.png', opts: { thumb: '/images/libra/02.png' } },
          { src: '/images/libra/03.png', opts: { thumb: '/images/libra/03.png' } },
          { src: '/images/libra/04.png', opts: { thumb: '/images/libra/04.png' } },
          { src: '/images/libra/05.png', opts: { thumb: '/images/libra/05.png' } },
          { src: '/images/libra/06.png', opts: { thumb: '/images/libra/06.png' } },
          { src: '/images/libra/07.png', opts: { thumb: '/images/libra/07.png' } }
        ]

        break
      }
      default:
        images = [
          { src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-002.png', opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-002.png' } },
          { src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-003.png', opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-003.png' } },
          { src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-004.png', opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-004.png' } },
          { src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-005.png', opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-005.png' } },
          { src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-006.png', opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-006.png' } },
          { src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-007.png', opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-007.png' } }
        ]
    }

    // eslint-disable-next-line no-undef
    $.fancybox.open(images, {
      baseClass: "guides-gallery",
      thumbs: {
        autoStart: true
      }
    });
  }

  openFormModal = () => {
    events.showModal(
      <div className="Join-modal">
        <ContactForm formCode="m3g0e6" formId="1561498" />
      </div>
    )
  }

  render() {
    return (
      <Container className="Guides" fluid>
        <Edge className="Edge-header">
          <EdgeStart colorName="white" />
          <Container>
            <div className="Edge-content">
              <div className="Edge-content-start">
                <div className="Icon-wrap">
                  <Icon name="guides" fill="none" viewBox="0 0 52 56" size="52" />
                  <div className="Icon-label color-steal-dark">Guides</div>
                </div>
              </div>
              <div className="Edge-content-end Edge-content-end-text color-white">
                We digg into best blockchain projects and break them down in simple terms.
              </div>
            </div>
          </Container>
        </Edge>

        <Container clipped={false}>
          <div className="Guides-filter">
            Latest

            <ul className="Guides-list">
              <li className="active">All</li>
              <li>Guides</li>
              <li>Cheat Sheets</li>
              <li>Pro Guides</li>
            </ul>
          </div>

          <Slider slidesToScroll={2} slidesToShow={2} bgColor="green">
            <CardGuide
              title="Bitcoin Explained In Simple Terms"
              info="27 Feb 2019"
              cover="network" />

            <CardGuide
              title="Ethereum in Simple Terms"
              info="27 Feb 2019"
              cover="libra" />

            <CardGuide
              title="Libra in Simple Terms"
              info="27 Feb 2019"
              cover="libra" />

            <CardGuide
              title="MakerDAO in Simple Terms"
              info="27 Feb 2019"
              cover="libra" />

            <CardGuide
              title="Cheat Sheet : Crypto Terms for Beginners"
              info="27 Feb 2019"
              cover="question" />

            <CardGuide
              title="Cheat Sheet : Stablecoins Explained"
              info="27 Feb 2019"
              cover="question" />
          </Slider>
        </Container>

        <Edge className="Edge-bottom">
          <Container>
            <div className="Edge-content">
              <div className="Edge-content-start" />
              <div className="Edge-content-end">
                <div className="Edge-pagination color-white-50">04 / 07</div>
                <div className="Edge-pagination-icon" onClick={() => events.navigate(5)}>
                  <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" />
                </div>
              </div>
            </div>
          </Container>

          <EdgeEnd colorName="dark" />
        </Edge>
      </Container>
    )
  }
}

export default Guides
