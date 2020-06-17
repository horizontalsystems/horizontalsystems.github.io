import React from 'react'

import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import CardCode from '../Card/CardCode'
import EdgeStart from '../Edge/EdgeStart'
import EdgeEnd from '../Edge/EdgeEnd'
import Slider from '../Slider/Slider'

import events from '../../core/EventEmitter'

import './Code.scss'

class Code extends React.Component {
  render() {
    return (
      <Container className="bg-steal-dark Code" fluid>
        <div className="Screen-right-half paths-grey" />

        <Edge className="Edge-header">
          <EdgeStart colorName="green" />
          <Container>
            <div className="Edge-content">
              <div className="Edge-content-start">
                <div className="Icon-wrap">
                  <Icon name="github-contained" fill="none" viewBox="0 0 62 62" size="52" />
                  <div className="Icon-label color-steal-dark">
                    Open-Source <br />
                    Code
                  </div>
                </div>
              </div>
              <div className="Edge-content-end Edge-content-end-text color-white">
                You're welcome to analyze, improve and reuse our code unconditionally.
              </div>
            </div>
          </Container>
        </Edge>

        <Container clipped={false}>
          <Slider slidesToScroll={3} slidesToShow={3} bgColor="dark">
            <CardCode
              title="Unstoppable"
              info={<>A decentralized multi-blockchain wallet for Bitcoin, Ethereum, Litecoin, EOS, Binance, DASH and other blockchains.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/unstoppable-wallet-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/unstoppable-wallet-ios">Swift</a></>}
              dark
            />
            <CardCode
              title="Bitcoin Library"
              info={<>Full implementation of Bitcoin SPV wallet protocol including standard-compliant wallet setup/restore,
                synchronization with the network, transactions, and more.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/bitcoin-kit-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/bitcoin-kit-ios">Swift</a></>}
              dark
            />
            <CardCode
              title="Ethereum Library"
              info={<>Wallet implementation for Ethereum. Can be a great time saver if you are building a DApp on Ethereum.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/ethereum-kit-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/ethereum-kit-ios">Swift</a></>}
              dark
            />
            <CardCode
              title="EOS Library"
              info={<>General purpose wallet library for the EOS blockchain and EOSIO protocol.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/eos-kit-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/eos-kit-ios">Swift</a></>}
              dark
            />
            <CardCode
              title="Binance DEX Library"
              info={<>Binance Chain wallet for Binance DEX (BEP2 standard) tokens. Easily extendable to support other Binance DEX features.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/binance-chain-kit-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/binance-chain-kit-ios">Swift</a></>}
              dark
            />
            <CardCode
              title="Atomic Swap Library"
              info={<>Atomic Swap library for Bitcoin (BTC) and Bitcoin Cash (BCH) swaps in a decentralized manner. Not tested in production.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/atomic-swap-kit-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/atomic-swap-kit-ios">Swift</a></>}
              dark
            />
            <CardCode
              title="Bitcoin Hodler Library"
              info={<>Construct Bitcoin transactions which can not be spent by the receiver until a certain date in the future.</>}
              actions={<>
                <a
                  href="https://github.com/horizontalsystems/bitcoin-kit-android/tree/master/hodler">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/bitcoin-kit-ios/tree/master/Hodler">Swift</a></>}
              dark
            />
            <CardCode
              title="Lightning Library"
              info={<>Add Lightning Network capabilities to your project. Lightning wallet creation, channel management and more.
                Work in progress.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/lightning-kit-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/lightning-kit-ios">Swift</a></>}
              dark
            />
          </Slider>
        </Container>

        <Edge className="Edge-bottom">
          <Container>
            <div className="Edge-content">
              <div className="Edge-content-start">
                <div className="Edge-icon-text">
                  Follow us @ &nbsp;
                  <a className="Edge-icon-link" href="https://github.com/horizontalsystems">Github</a>
                </div>
              </div>
              <div className="Edge-content-end">
                <div className="Edge-pagination color-white-50">05 / 07</div>
                <div className="Edge-pagination-icon" onClick={() => events.navigate(6)}>
                  <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" />
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

export default Code
