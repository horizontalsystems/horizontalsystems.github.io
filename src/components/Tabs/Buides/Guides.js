import React, { Component } from 'react'
import Container from '../../Container/Container'
import ButtonText from '../../ButtonText/ButtonText'
import Subscribe from '../../Subscribe/Subscribe'
import Card from '../../Card/Card'

import events from '../../../core/EventEmitter.js'

import './Guides.scss'

class Guides extends Component {
  showModal = title => {
    events.showModal(<Subscribe title={title} button="Subscribe" />)
  }

  showGuide = name => {
    // eslint-disable-next-line no-undef
    $.fancybox.open([
      {
        src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-002.png',
        opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-002.png' }
      },
      {
        src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-003.png',
        opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-003.png' }
      },
      {
        src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-004.png',
        opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-004.png' }
      },
      {
        src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-005.png',
        opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-005.png' }
      },
      {
        src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-006.png',
        opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-006.png' }
      },
      {
        src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-007.png',
        opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-007.png' }
      }
    ], {
      thumbs: {
        autoStart: true
      }
    });
  }

  render() {
    return (
      <div>
        <Container>
          <div className="Guides">
            <Card key="btc" img="/images/guides/btc-in-simple-term.png" title="Bitcoin Explained in Simple Terms"
                  actions={[
                    <ButtonText key="0" text="Look inside" onClick={() => this.showGuide('simple-term')} />,
                    <ButtonText key="1" text="Download" onClick={() => this.showModal('Bitcoin Explained in Simple Terms')} />
                  ]}>
              - What is Bitcoin? <br />
              - What makes Bitcoin so unique?<br />
              - And how can you invest?<br /><br />

              The purpose of this eBook is to answer those questions by introducing you to Bitcoin and other
              cryptocurrencies in simple terms and an easy-to-digest manner
            </Card>
            <Card key="crypto" img="/images/guides/crypto-for-beginners.png" title="Crypto Terms for Beginners"
                  actions={[
                    <ButtonText key="0" text="Look inside" onClick={() => this.showGuide()} />,
                    <ButtonText key="1" text="Download" onClick={() => this.showModal('Crypto Terms for Beginners')} />
                  ]}>
              - Do you know what a whale means in crypto?<br />
              - The difference between non-custodial and custodial wallets?<br>
              - What KYC and AML mean and why you should care?
              - <br /><br />

              If not, this cheat sheet of 50 beginner cryptocurrency terms is for you. <br /><br />
              So the next time you are having conversation about crypto and someone tells you to "buy the dip" or "avoid FOMO", you'll know
              what they mean!
            </Card>
          </div>
        </Container>
        <Container>
          <Subscribe />
        </Container>
      </div>
    )
  }
}

export default Guides
