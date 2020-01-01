import React from 'react'
import Card from '../../Card/Card'
import ButtonText from '../../ButtonText/ButtonText'

import './Apps.scss'

function Apps() {
  return (
    <Card img="/images/guides/wallet-screenshot.png" title="Unstoppable Wallet" actions={[
      <ButtonText key="0" text="Site" />,
      <ButtonText key="1" text="AppStore" />,
      <ButtonText key="2" text="Google Play" />
    ]}>
      Invest in Bitcoin, Ethereum, EOS, Dash, Bitcoin Cash, Binance DEX and 60+ blockchain based
      projects. <br /><br />
      Store cryptocurrency safely and privately. Get full and exclusive control over your assets. <br /><br />
      Designed to detail and built by gifted engineers.
    </Card>
  )
}

export default Apps
