import React from 'react'
import Card from '../../Card/Card'
import ButtonText from '../../ButtonText/ButtonText'

import './Apps.scss'

function Apps() {
  return (
    <Card img="/images/guides/wallet-screenshot.png" title="Unstoppable Wallet" actions={[
      <ButtonText key="0" text="Site" link="https://unstoppable.money/" />,
      <ButtonText key="1" text="AppStore" />,
      <ButtonText key="2" text="Google Play" />
    ]}>
      Invest in Bitcoin, Ethereum, EOS, Dash, Bitcoin Cash, Binance DEX and 50+ blockchain based
      projects. <br /><br />
      Store cryptocurrency safely and privately. Get full and exclusive control over your assets in a decentralized and non-custodial wallet app. <br /><br />
      Designed to detail and built by gifted engineers.<br /><br />
      
    </Card>
  )
}

export default Apps
