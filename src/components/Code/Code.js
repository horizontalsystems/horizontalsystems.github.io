import React from 'react'

import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import CardCode from '../Card/CardCode'
import Slider from '../Slider/Slider'

import events from '../../core/EventEmitter'

import './Code.scss'

class Code extends React.Component {
  render() {
    return (
      <Container className="Container-code bg-steal-dark" fluid>
        <div className="Screen-right-half paths-grey" />

        <Edge className="Edge-header">
          <Container>
            <div className="Edge-content">
              <div className="Edge-content-start">
                <div className="Icon-wrap">
                  <Icon name="code" fill="none" viewBox="0 0 50 50" size="52" />
                  <div className="Icon-label color-steal-light">
                    Code
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Edge>

        <Container>
          <div className="Edge-info">
            <div className="Page-info">
              To facilitate seamless access to cryptocurrency and expansion of decentralized systems Horizontal Systems provides unconditional access to the
              source code powering its products.
            </div>
          </div>
        </Container>

        <Container clipped={false}>
          <Slider slidesToScroll={3} slidesToShow={3} bgColor="dark">
            <CardCode
              title="Unstoppable"
              info={<>A decentralized multi-blockchain wallet for Bitcoin, Ethereum, Litecoin, EOS, Binance, DASH, Zcash and other blockchains.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/unstoppable-wallet-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/unstoppable-wallet-ios">Swift</a></>}
              dark
            />
            <CardCode
              title="Bitcoin Kit"
              info={<>Full Bitcoin SPV wallet incl. standard-compliant wallet setup/restore, network sync, transactions, and more.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/bitcoin-kit-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/bitcoin-kit-ios">Swift</a></>}
              dark
            />
            <CardCode
              title="Ethereum Kit"
              info={<>Comprehensive development kit for Ethereum. Can be a great time saver if you are building a DApp on Ethereum.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/ethereum-kit-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/ethereum-kit-ios">Swift</a></>}
              dark
            />
            <CardCode
              title="EOSIO Kit"
              info={<>General purpose simple wallet library for the EOS blockchain and EOSIO protocol.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/eos-kit-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/eos-kit-ios">Swift</a></>}
              dark
            />
            <CardCode
              title="Binance Chain"
              info={<>General purpose wallet library for Binance Chain incl. support for BEP tokens. Easily extendable.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/binance-chain-kit-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/binance-chain-kit-ios">Swift</a></>}
              dark
            />
            <CardCode
              title="Atomic Swaps"
              info={<>Atomic Swap prototype swapping between Bitcoin (BTC) and Bitcoin Cash (BCH) in a decentralized manner. Not tested in production.</>}
              actions={<>
                <a href="https://github.com/horizontalsystems/atomic-swap-kit-android">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/atomic-swap-kit-ios">Swift</a></>}
              dark
            />
            <CardCode
              title="Hodler Kit"
              info={<>Construct Bitcoin transactions which can not be spent by the receiver until a certain date in the future.</>}
              actions={<>
                <a
                  href="https://github.com/horizontalsystems/bitcoin-kit-android/tree/master/hodler">Kotlin</a>&nbsp;|&nbsp;
                <a href="https://github.com/horizontalsystems/bitcoin-kit-ios/tree/master/Hodler">Swift</a></>}
              dark
            />
            <CardCode
              title="Lightning Kit"
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
              <div />
              <div className="Edge-content-end">
                <div className="Edge-pagination color-white-50">05 / 07</div>
                <div className="Edge-pagination-icon" onClick={() => events.navigate(6)}>
                  <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" stroke="#808085" />
                </div>
              </div>
            </div>
          </Container>
        </Edge>
      </Container>
    )
  }
}

export default Code
