import React from 'react'

import Container from '../Container/Container'
import Scroller from '../Scroller/Scroller'
import Icon from '../Icon/Icon'
import Edge from '../Edge/Edge'
import Card from '../Card/Card'
import events from '../../core/EventEmitter'

import './Apps.scss'

class Apps extends React.Component {
  state = {
    padding: 0
  }

  componentDidMount() {
    const rect = this.content.getBoundingClientRect()
    this.setState({ padding: rect.left })
  }

  render() {
    return (
      <Container className="Apps" fluid>
        <div className="Screen-right-half paths-white" />

        <Edge className="Edge-header">
          <div className="Edge-start bg-steal-dark" />
          <Container>
            <div className="Edge-content" ref={r => this.content = r}>
              <div className="Edge-content-start">
                <div className="Icon-wrap">
                  <Icon name="apps" fill="none" viewBox="0 0 52 52" size="52" />
                  <div className="Icon-label">Apps</div>
                </div>
              </div>
              <div className="Edge-content-end Edge-content-end-text color-dark">
                Independence, knowledge and privacy are the main principles behind the products we build.
              </div>
            </div>
          </Container>
        </Edge>

        <Scroller padding={this.state.padding}>
          <Card
            title={
              <img src="/images/cards/unstoppable-wallet.png" alt="" />
            }
            info={<>Store crypto safely, enjoy unconditional control, discover emerging projects, monitor performance and time market tops and bottoms.</>}
            cover="/images/cards/unstoppable-wallet-screen.png"
            actionsLeft={
              <a href="https://unstoppable.money">Learn more</a>
            }
            actionsRight={
              <>
                <a href="https://itunes.apple.com/app/bank-bitcoin-wallet/id1447619907?ls=1&mt=8">iOS</a> |&nbsp;
                <a href="https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet">Android</a>
              </>
            }
          />
          <Card
            title={
              <img src="/images/cards/unstoppable-wallet.png" alt="" />
            }
            info={<>Discover lightning network. Accept instant Bitcoin payments</>}
            cover="/images/cards/unstoppable-wallet-screen.png"
            actionsLeft={
              <a href="/"></a>
            }
            actionsRight={
              <>
                <a href="https://github.com/horizontalsystems/unstoppable-wallet-ios">Coming Soon ...</a>
              </>
            }
          />
        </Scroller>

        <Edge className="Edge-bottom">
          <Container>
            <div className="Edge-content">
              <div className="Edge-content-start" />
              <div className="Edge-content-end">
                <div className="Edge-pagination color-white-50">03 / 07</div>
                <div className="Edge-pagination-icon sm-svg-green" onClick={() => events.navigate(4)}>
                  <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" />
                </div>
              </div>
            </div>
          </Container>

          <div className="Edge-end bg-green" />
        </Edge>
      </Container>
    )
  }
}

export default Apps
