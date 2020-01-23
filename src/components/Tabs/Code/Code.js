import React from 'react'
import Card from '../../Card/Card'
import ButtonText from '../../ButtonText/ButtonText'
import Button from '../../Button/Button'

import './Code.scss'

function Code() {
  return (
    <div>
      <div className="code">
        <Card title="Unstoppable wallet" actions={[
          <ButtonText key="0" text="Swift" link="https://github.com/horizontalsystems/unstoppable-wallet-ios" />,
          <ButtonText key="1" text="Kotlin" link="https://github.com/horizontalsystems/unstoppable-wallet-android" />
        ]}>
          A secure and decentralized Bitcoin and other cryptocurrency wallet. Supports Bitcoin,
          Ethereum, EOS, Binance Chain, Bitcoin Cash, DASH ...
        </Card>
        <Card title="Bitcoin SPV Kit" actions={[
          <ButtonText key="0" text="Swift" link="https://github.com/horizontalsystems/bitcoin-kit-ios" />,
          <ButtonText key="1" text="Kotlin" link="https://github.com/horizontalsystems/bitcoin-kit-android" />
        ]}>
          This is a full implementation of SPV node including wallet creation/restore, synchronization with network,
          send/receive transactions, and more.
        </Card>
        <Card title="Ethereum Kit" actions={[
          <ButtonText key="0" text="Swift" link="https://github.com/horizontalsystems/ethereum-kit-ios" />,
          <ButtonText key="1" text="Kotlin" link="https://github.com/horizontalsystems/ethereum-kit-android" />
        ]}>
          Fully functional wallet implementation for Ethereum protocol. Using this toolkit you can built ethereum +
          ERC 20 token wallet in no time :)
        </Card>
        <Card title="EOS Kit" actions={[
          <ButtonText key="0" text="Swift" link="https://github.com/horizontalsystems/eos-kit-ios" />,
          <ButtonText key="1" text="Kotlin" link="https://github.com/horizontalsystems/eos-kit-android" />
        ]}>
          General purpose library (SDK) for the EOS blockchain and EOSIO protocol, written on Swift and Kotlin
        </Card>
        <Card title="Binance Chain Kit" actions={[
          <ButtonText key="0" text="Swift" link="https://github.com/horizontalsystems/binance-chain-kit-ios" />,
          <ButtonText key="1" text="Kotlin" link="https://github.com/horizontalsystems/binance-chain-kit-android" />
        ]}>
          Full Binance DEX library (SDK), implemented on Swift and Kotlin
        </Card>
        <Card title="Atomic Swap Kit" actions={[
          <ButtonText key="0" text="Swift" link="https://github.com/horizontalsystems/atomic-swap-kit-ios" />,
          <ButtonText key="1" text="Kotlin" link="https://github.com/horizontalsystems/atomic-swap-kit-android" />
        ]}>
          Atomic Swap library for Bitcoin (BTC) and Bitcoin Cash (BCH) swaps in decentralized manner.
          Implemented on Swift and Kotlin
        </Card>
        <Card title="Hodler Kit" actions={[
          <ButtonText key="0" text="Swift" link="https://github.com/horizontalsystems/bitcoin-kit-ios/tree/master/Hodler" />,
          <ButtonText key="1" text="Kotlin" link="https://github.com/horizontalsystems/bitcoin-kit-android/tree/master/hodler" />
        ]}>
          Hodler Kit library
        </Card>
      </div>
      <div className="follow-us">
        <div className="follow-us-title">
          Follow Us on Github
        </div>
        <div className="follow-us-action">
          <a href="https://github.com/horizontalsystems">
            <Button text="Go to Repos" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Code
