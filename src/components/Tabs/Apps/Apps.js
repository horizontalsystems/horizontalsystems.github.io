import React from 'react'
import Card from '../../Card/Card'
import ButtonText from '../../ButtonText/ButtonText'
import Container from '../../Container/Container'

import './Apps.scss'

function Apps() {
  return (
    <div>
      <Container>
        <Card img="/images/guides/wallet-screenshot.png"
              srcSet="/images/guides/wallet-screenshot@2x.png 2x"
              title="Unstoppable Wallet"
              actions={[
                <ButtonText key="0" text="Site" link="https://unstoppable.money/" />,
                <ButtonText key="1" text="App Store" link="https://itunes.apple.com/us/app/bank-wallet/id1447619907?ls=1&mt=8" />,
                <ButtonText key="2" text="Play Market" link="https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet" />,
                <ButtonText key="3" text="APK"  link="https://github.com/horizontalsystems/unstoppable-wallet-android/releases" />
              ]}>
          Invest in Bitcoin, Ethereum, EOS, Dash, Bitcoin Cash, Binance DEX and 50+ blockchain based
          projects. <br /><br />
          Store cryptocurrency safely and privately. Get full and exclusive control over your assets in a decentralized
          and non-custodial wallet app. <br /><br />
          Designed to detail and built by gifted engineers.<br /><br />
        </Card>
      </Container>
      <Container>
        <Card img="/images/guides/bitcoin-lnd.png"
              title="onLightning Wallet"
              actions={[
                <ButtonText key="0" text="Site" />,
                <ButtonText key="1" text="App Store" />,
                <ButtonText key="2" text="Play Market" />,
                <ButtonText key="3" text="APK" />
              ]}>
          Onboard lightning network without getting lost and start sending/receiving Bitcoins over the lightning network
          instantly at nearly zero cost. <br /><br />

          Simple on surface and powerful under the hood. The decentralized lightning wallet you have been waiting for.
        </Card>
      </Container>
    </div>
  )
}

export default Apps
