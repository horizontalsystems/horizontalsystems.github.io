import React from 'react'
import { useParallax } from 'react-scroll-parallax'

import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import CardCode from '../Card/CardCode'
import Slider from '../Slider/Slider'

import './Code.scss'

function Code() {
  const parallax = useParallax({
    translateX: [-1, -30],
    shouldAlwaysCompleteAnimation: true,
  })

  return (
    <Container fluid>
      <div className="Screen-absolute-full z-0" style={{ background: 'url(/images/home/paths-green.svg)' }} />
      <img
        src="/images/home/gradient.svg"
        className="gradient-layout position-absolute"
        alt=""
        ref={parallax.ref}
        onLoad={() => parallax.controller.update()}
      />

      <Edge className="Edge-header">
        <Container className="d-flex justify-content-center">
          <div className="Edge-title line-h-normal color-green">
            Code
          </div>
        </Container>
      </Edge>

      <Container className="Edge-center">
        <div className="Edge-text color-grey">
          We build code for seamless expansion of decentralized systems.
        </div>
      </Container>

      <Container className="Code-slider" clipped={false}>
        <Slider slidesToScroll={2} slidesToShow={2} bgColor="dark">
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
            info={<>Atomic Swap prototype swapping between Bitcoin (BTC) and Bitcoin Cash (BCH) in a decentralized manner. Not tested in
              production.</>}
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

      <Edge className="Edge-bottom" />
    </Container>
  )
}

export default Code
