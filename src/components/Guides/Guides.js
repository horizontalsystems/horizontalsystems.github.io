import React from 'react'
import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'

import Card from '../Card/Card'
import Scroller from '../Scroller/Scroller'
import events from '../../core/EventEmitter'

import './Guides.scss'

class Guides extends React.Component {
  state = {
    padding: 0
  }

  componentDidMount() {
    const rect = this.content.getBoundingClientRect()
    this.setState({ padding: rect.left })
  }

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

  render() {
    return (
      <Container className="Guides" fluid>
        <Edge className="Edge-header">
          <div className="Edge-start bg-white" />
          <Container>
            <div className="Edge-content" ref={r => this.content = r}>
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

        <Scroller padding={this.state.padding}>
          <Card
            title="Libra Explained In Simple Terms"
            info={<>Do you know a whale from a bear? <br />A cold wallet from a decentralised wallet?<br /></>}
            cover="/images/cards/libra.png"
            actionsLeft={
              <span onClick={() => this.showGuide('libra')}>Preview</span>
            }
          />
          <Card
            title="Bitcoin Explained In Simple Terms"
            info={<>What is Bitcoin? <br />What makes Bitcoin so unique? <br />And how can you invest? <br /></>}
            cover="/images/cards/bitcoin.png"
            actionsLeft={
              <span onClick={() => this.showGuide('simple-term')}>Preview</span>
            }
          />
          <Card
            title="Crypto Terms for Beginners"
            info={<>
              Do you know what a whale means in crypto? <br />
              The difference between non-custodial and custodial wallets? <br />
              What KYC and AML mean and why you should care? <br />
              </>}
            cover="/images/cards/question.png"
            actionsLeft={
              <span>Preview</span>
            }
          />
        </Scroller>

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

          <div className="Edge-end bg-dark" />
        </Edge>
      </Container>
    )
  }
}

export default Guides
