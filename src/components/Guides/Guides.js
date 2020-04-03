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
                We digg into best blockchain projects that and explain them in simple terms.
              </div>
            </div>
          </Container>
        </Edge>

        <Scroller padding={this.state.padding}>

          <Card
            title="Bitcoin in Simple Terms"
            info={<>Get familiar with Bitcoin phenomena and the ecosystem around it, in an easy to digest manner. <br /><br />This 30 pager illustrated guide will take you from zero to a level where you understand all essentials without eating your head. <br /></>}
            cover="/images/cards/bitcoin.png"
            actionsLeft={
              <span onClick={() => this.showGuide('simple-term')}>Preview</span>
            }
          />

          <Card
            title="Ethereum in Simple Terms"
            info={<>Wondering what's a big deal with Ethereum and how it's different from Bitcoin? <br /><br />This guide explains what Ethereum is and how are decentralized financial services built on top of it work.<br /></>}
            cover="/images/cards/libra.png"
            actionsLeft={
              <span>Coming Soon</span>
            }
          />


          <Card
            title="Libra in Simple Terms"
            info={<>In this guide we look at what Facebook's Libra project is, how it's going to work and the impact it may have on the payments ecosystem globally. <br /></>}
            cover="/images/cards/libra.png"
            actionsLeft={
              <span onClick={() => this.showGuide('libra')}>Preview</span>
            }
          />

          <Card
            title="MakerDAO in Simple Terms"
            info={<>MakerDAO is a lending facility built on Ethereum which currently manages over half a billion USD.<br /><br />This guide explains what DAO projects are, how exactly MakerDAO works and what services it provides.<br /></>}
            cover="/images/cards/libra.png"
            actionsLeft={
              <span>Coming Soon</span>
            }
          />          


          <Card
            title="Cheat Sheet : Crypto Terms for Beginners"
            info={<>
              Do you know what a whale means in crypto? The difference between non-custodial and custodial wallets? What KYC and AML mean and why you should care? <br />
              </>}
            cover="/images/cards/question.png"
            actionsLeft={
              <span>Download</span>
            }
          />


          <Card
            title="Cheat Sheet : Stablecoins Explained"
            info={<>
              Do you know what a whale means in crypto? The difference between non-custodial and custodial wallets? What KYC and AML mean and why you should care? <br />
              </>}
            cover="/images/cards/question.png"
            actionsLeft={
              <span>Download</span>
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
