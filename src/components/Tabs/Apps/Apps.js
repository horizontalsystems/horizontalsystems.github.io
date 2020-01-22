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
                <ButtonText key="1" text="AppStore" />,
                <ButtonText key="2" text="Google Play" />
              ]}>
          Invest in Bitcoin, Ethereum, EOS, Dash, Bitcoin Cash, Binance DEX and 50+ blockchain based
          projects. <br /><br />
          Store cryptocurrency safely and privately. Get full and exclusive control over your assets in a decentralized
          and non-custodial wallet app. <br /><br />
          Designed to detail and built by gifted engineers.<br /><br />
        </Card>
      </Container>
      <Container>
        <Card img="/images/guides/bitcoin-lnd.png" title="Bitcoin ID">
          Invest in Bitcoin, Ethereum, EOS, Dash, Bitcoin Cash, Binance DEX and 50+ blockchain based
          projects. <br /><br />
          Store cryptocurrency safely and privately. Get full and exclusive control over your assets in a decentralized
          and non-custodial wallet app. <br /><br />
          Designed to detail and built by gifted engineers. <br /><br />
        </Card>
      </Container>
    </div>
  )
}

export default Apps
