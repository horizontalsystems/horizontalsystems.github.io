import React from 'react'
import Card from '../../Card/Card'
import ButtonText from '../../ButtonText/ButtonText'
import Button from '../../Button/Button'

import './Code.scss'

function Code() {
  return (
    <div>
      <div className="code">
        <Card title="Bitcoin SPV Kit" actions={[<ButtonText key="0" text="Swift" />, <ButtonText key="1" text="Kotlin" />]}>
          This is a full implementation of SPV node including wallet creation/restore, synchronization with network,
          send/receive transactions, and more.
        </Card>
        <Card title="Ethereum Kit" actions={[<ButtonText key="0" text="Swift" />, <ButtonText key="1" text="Kotlin" />]}>
          Fully functional wallet implementation for Ethereum protocol. Using this toolkit you can built ethereum +
          ERC 20 token wallet in no time :)
        </Card>
        <Card title="EOS Kit" actions={[<ButtonText key="0" text="Swift" />, <ButtonText key="1" text="Kotlin" />]}>
          General purpose iOS library (SDK) for the EOS blockchain and EOSIO protocol, written on Swift and Kotlin
        </Card>
        <Card title="Binance Chain Kit" actions={[<ButtonText key="0" text="Swift" />, <ButtonText key="1" text="Kotlin" />]}>
          Full Binance DEX iOS library (SDK), implemented on Swift and Kotlin
        </Card>
        <Card title="Atomic Swap Kit" actions={[<ButtonText key="0" text="Swift" />, <ButtonText key="1" text="Kotlin" />]}>
          Atomic Swap iOS library for Bitcoin (BTC) and Bitcoin Cash (BCH) swaps in decentralized manner.
          Implemented
          on Swift and Kotlin
        </Card>
      </div>
      <div className="follow-us">
        <div className="follow-us-title">
          Follow Us on Github
        </div>
        <div className="follow-us-action">
          <Button text="Go to Repos" />
        </div>
      </div>
    </div>
  )
}

export default Code