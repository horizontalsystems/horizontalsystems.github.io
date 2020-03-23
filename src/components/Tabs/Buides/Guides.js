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
      <div>
        <Container className="Container-Guides">
          <Card key="btc"
                img="/images/guides/btc-in-simple-term.png"
                srcSet="/images/guides/btc-in-simple-term@2x.png 2x"
                title="Bitcoin Explained in Simple Terms"
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
          <Card key="crypto"
                img="/images/guides/crypto-for-beginners.png"
                srcSet="/images/guides/crypto-for-beginners@2x.png 2x"
                title="Crypto Terms for Beginners"
                actions={[
                  <ButtonText key="1" text="Download" link="/images/cryptoterms.pdf" />
                ]}>
            - Do you know what a whale means in crypto?<br />
            - The difference between non-custodial and custodial wallets? <br />
            - What KYC and AML mean and why you should care? <br /><br />

            If not, this cheat sheet of 50 beginner cryptocurrency terms is for you. <br /><br />
            So the next time you are having conversation about crypto and someone tells you to "buy the dip" or "avoid
            FOMO", you'll know
            what they mean!
          </Card>
          <Card key="libra"
                img="/images/guides/libra.png"
                srcSet="/images/guides/libra@2x.png 2x"
                title="Libra Explained In Simple Terms"
                actions={[
                  <ButtonText key="0" text="Look inside" onClick={() => this.showGuide('libra')} />,
                  <ButtonText key="1" text="Download" link="https://horizontalsystems-io.tradepub.com/free/w_hori07/prgm.cgi?a=1" />
                ]}>

            - Do you know a whale from a bear? <br />
            - A cold wallet from a decentralised wallet? <br /><br />
            If not, this cheat sheet of 50 beginner cryptocurrency terms is for you.
            So the next time you're in a conversation about crypt and someone asks you to "buy the dip", you'll know
            what they mean!
          </Card>
          <Card key="eth"
                img="/images/guides/eth.png"
                srcSet="/images/guides/eth@2x.png 2x"
                title="Ethereum Explained In Simple Terms"
                actions={[
                  <ButtonText key="0" text="Look inside" />,
                  <ButtonText key="1" text="Download" />
                ]}>
            - Do you know a whale from a bear? <br />
            - A cold wallet from a decentralised wallet? <br /><br />

            If not, this cheat sheet of 50 beginner cryptocurrency terms is for you.
            So the next time you're in a conversation about crypt and someone asks you to "buy the dip", you'll know
            what they mean!
          </Card>
        </Container>
        <Container>
          <Subscribe />
        </Container>
      </div>
    )
  }
}

export default Guides
