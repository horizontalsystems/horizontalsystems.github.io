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
        <div className="Screen-right-half paths-grey" />

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
                We are indeptedly grateful to the army of engineers for the emergence of decentralized systems. You're welcome to contribute and reuse our code unconditionally.
              </div>
            </div>
          </Container>
        </Edge>

        <Scroller padding={this.state.padding}>
          <Card
            title="Unstoppable Wallet Library"
            info={<>A decentralized multi-blockchain wallet for Bitcoin and other cryptocurrencies. This wallet app fully supports Bitcoin, Ethereum, Litecoin, EOS, Binance DEX, Bitcoin Cash and DASH blockchains.</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/unstoppable-wallet-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/unstoppable-wallet-ios">Swift</a></>}
            dark
          />
          <Card
            title="Bitcoin Library"
            info={<>Full implementation of SPV protocol including standard-compliant wallet creation/restore, synchronization with network, send/receive transactions, and a lot more.</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/bitcoin-kit-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/bitcoin-kit-ios">Swift</a></>}
            dark
          />
          <Card
            title="Ethereum Library"
            info={<>Full wallet/account implementation for Ethereum blockchain. Can be a great time saver if you are building a DApp on Ethereum.</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/ethereum-kit-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/ethereum-kit-ios">Swift</a></>}
            dark
          />
          <Card
            title="EOS Library"
            info={<>General purpose wallet library for the EOS blockchain and EOSIO protocol.</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/eos-kit-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/eos-kit-ios">Swift</a></>}
            dark
          />
          <Card
            title="Binance DEX Library"
            info={<>Binance DEX wallet for BEP2 tokens, most popular token type on Binance DEX. Easily extandable to support other Binance DEX features.</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/binance-chain-kit-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/binance-chain-kit-ios">Swift</a></>}
            dark
          />
          <Card
            title="Atomic Swap Library"
            info={<>Atomic Swap library for Bitcoin (BTC) and Bitcoin Cash (BCH) swaps in decentralized manner. This library has not been tested in production environment yet.</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/atomic-swap-kit-android">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/atomic-swap-kit-ios">Swift</a></>}
            dark
          />
          <Card
            title="Bitcoin Hodler Library"
            info={<>Using native Bitcoin protocol this kit enables construction of Bitcoin transactions which can not be spent by the receiver until a certain date in the future.</>}
            actionsLeft={<>
              <a href="https://github.com/horizontalsystems/bitcoin-kit-android/tree/master/hodler">Kotlin</a>&nbsp;|&nbsp;
              <a href="https://github.com/horizontalsystems/bitcoin-kit-ios/tree/master/Hodler">Swift</a></>}
            dark
          />
          <Card
            title="Lightning Library"
            info={<>Add Lightning Network capabilities to your project. Lighning wallet creation, channels and so on. Work in progress.</>}
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
                  <Icon name="github" fill="#fff" viewBox="0 0 30 30" size="30" /> Follow our work Github
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
