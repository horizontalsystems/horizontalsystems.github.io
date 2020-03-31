import React from 'react'

import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Card from '../Card/Card'
import Scroller from '../Scroller/Scroller'
import events from '../../core/EventEmitter'

import './Code.scss'

class Code extends React.Component {
  state = {
    padding: 0
  }

  componentDidMount() {
    const rect = this.content.getBoundingClientRect()
    this.setState({ padding: rect.left })
  }

  render() {
    return (
      <Container className="bg-steal-dark" fluid>
        <div className="Screen-half" />

        <Edge className="Edge-header">
          <div className="Edge-start bg-green" />
          <Container>
            <div className="Edge-content" ref={r => this.content = r}>
              <div className="Edge-content-start">
                <div className="Icon-wrap">
                  <Icon name="code" fill="none" viewBox="0 0 52 52" size="52" />
                  <div className="Icon-label color-steal-dark">Code</div>
                </div>
              </div>
              <div className="Edge-content-end Edge-content-end-text color-white">
                We are indeptedly grateful to the army of open source blockchain engeineers thet contributed to the
                emergence of decentralized systems
              </div>
            </div>
          </Container>
        </Edge>

        <Scroller padding={this.state.padding}>
          <Card
            title="Unstoppable Wallet Kit"
            info={<>A secure and decentralized Bitcoin and other cryptocurrency wallet. Supports Bitcoin, Ethereum, EOS, Binance Chain, Bitcoin Cash, DASH ...</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/unstoppable-wallet-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/unstoppable-wallet-ios">Swift</a></>}
            dark
          />
          <Card
            title="Ethereum Kit"
            info={<>This is a full implementation of SPV node including wallet creation/restore, synchronization with network, send/receive transactions, and more.</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/bitcoin-kit-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/bitcoin-kit-ios">Swift</a></>}
            dark
          />
          <Card
            title="Ethereum Kit"
            info={<>Fully functional wallet implementation for Ethereum protocol. Using this toolkit you can built ethereum + ERC 20 token wallet in no time :)</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/ethereum-kit-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/ethereum-kit-ios">Swift</a></>}
            dark
          />
          <Card
            title="EOS Kit"
            info={<>General purpose library (SDK) for the EOS blockchain and EOSIO protocol, written on Swift and Kotlin</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/eos-kit-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/eos-kit-ios">Swift</a></>}
            dark
          />
          <Card
            title="Binance Chain Kit"
            info={<>Full Binance DEX library (SDK), implemented on Swift and Kotlin</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/binance-chain-kit-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/binance-chain-kit-ios">Swift</a></>}
            dark
          />
          <Card
            title="Atomic Swap Kit"
            info={<>Atomic Swap library for Bitcoin (BTC) and Bitcoin Cash (BCH) swaps in decentralized manner. Implemented on Swift and Kotlin</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/atomic-swap-kit-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/atomic-swap-kit-ios">Swift</a></>}
            dark
          />
          <Card
            title="Hodler Kit"
            info={<>Hodler Kit library</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/bitcoin-kit-android/tree/master/hodler">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/bitcoin-kit-ios/tree/master/Hodler">Swift</a></>}
            dark
          />
          <Card
            title="Lightning Kit"
            info={<>Lightning Kit library</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/lightning-kit-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/lightning-kit-ios">Swift</a></>}
            dark
          />
        </Scroller>

        <Edge className="Edge-bottom">
          <Container>
            <div className="Edge-content">
              <div className="Edge-content-start">
                <a className="Edge-icon-text Start-on-github" href="https://github.com/horizontalsystems">
                  <Icon name="github" fill="#fff" viewBox="0 0 30 30" size="30" /> Start on Github
                </a>
              </div>
              <div className="Edge-content-end">
                <div className="Edge-pagination color-dark">05 / 07</div>
                <div className="Edge-pagination-icon" onClick={() => events.navigate(6)}>
                  <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" stroke="#05C46B" />
                </div>
              </div>
            </div>
          </Container>

          <div className="Edge-end bg-white" />
        </Edge>
      </Container>
    )
  }

}

export default Code
