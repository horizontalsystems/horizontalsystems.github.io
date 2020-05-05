import React from 'react'
import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'

import Card from '../Card/Card'
import Scroller from '../Scroller/Scroller'
import events from '../../core/EventEmitter'

import './Guides.scss'
import JoinForm from '../Join/JoinForm'
import EdgeStart from '../Edge/EdgeStart'
import EdgeEnd from '../Edge/EdgeEnd'

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

  openFormModal = () => {
    events.showModal(
      <div className="Join-modal">
        <JoinForm formCode="m3g0e6" formId="1561498" />
      </div>
    )
  }

  render() {
    return (
      <Container className="Guides" fluid>
        <Edge className="Edge-header">
          <EdgeStart colorName="white" />
          <Container>
            <div className="Edge-content" ref={r => this.content = r}>
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

        <Scroller padding={this.state.padding}>

          <Card
            title="Bitcoin in Simple Terms"
            info={<>Understand Bitcoin in an easy to digest manner. Go from zero to a level where you clearly understand all essentials without eating your head. <br /></>}
            cover="bitcoin"
            actionsLeft={
              <span onClick={() => this.showGuide('simple-term')}>Preview</span>
            }
            actionsRight={
              <span onClick={() => this.openFormModal()}>Download</span>
            }
          />

          <Card
            title="Ethereum in Simple Terms"
            info={<>Wondering what's a big deal with Ethereum? Learn what makes Ethereum different and what are decentralzied financial (DeFi) services built on top of it.<br /></>}
            cover="libra"
            actionsLeft={
              <span>Coming Soon</span>
            }
          />


          <Card
            title="Libra in Simple Terms"
            info={<>This guide looks at what Facebook's Libra project is, how it's going to work and the potential impact it may have on the payments ecosystem globally. <br /></>}
            cover="libra"
            actionsLeft={
              <span onClick={() => this.showGuide('libra')}>Preview</span>
            }
            actionsRight={
              <span onClick={() => this.openFormModal()}>Download</span>
            }
          />

          <Card
            title="MakerDAO in Simple Terms"
            info={<>MakerDAO is a lending service built on Ethereum with over half a billion USD under it's control. This guide explains how exactly MakerDAO works and what makes it different from traditional lenders.<br /></>}
            cover="libra"
            actionsLeft={
              <span>Coming Soon</span>
            }
          />


          <Card
            title="Cheat Sheet : Crypto Terms for Beginners"
            info={<>
              Do you know what a whale means in crypto? The difference between non-custodial and custodial wallets? What KYC and AML mean and why you should care? <br />
              </>}
            cover="question"
            actionsLeft={
              <a href="/guides/cryptoterms.pdf" target="_blank">Download</a>
            }
          />


          <Card
            title="Cheat Sheet : Stablecoins Explained"
            info={<>
              Do you know what is a stablecoin? What makes stablecoin different from other crypto currencies? How stablecoins work and wy there are different types.<br />
              </>}
            cover="question"
            actionsLeft={
              <a href="/guides/stablecoins.pdf" target="_blank">Download</a>
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

          <EdgeEnd colorName="dark" />
        </Edge>
      </Container>
    )
  }
}

export default Guides
