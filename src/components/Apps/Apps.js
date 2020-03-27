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
                Only you can manage your funds. Privacy, independence and reliability are the main principles of our
                products Only you can manage your funds.
              </div>
            </div>
          </Container>
        </Edge>

        <Scroller padding={this.state.padding}>
          <Card
            title={
              <img src="/images/cards/unstoppable-wallet.png" alt="" />
            }
            info={<>Only you can manage your funds. Privacy, independence and reliability are the main principles of our products</>}
            cover="/images/cards/unstoppable-wallet-screen.png"
            actionsLeft={
              <a href="/">Learn more</a>
            }
            actionsRight={
              <>
                <a href="https://github.com/horizontalsystems/unstoppable-wallet-ios">IOS</a> |&nbsp;
                <a href="https://github.com/horizontalsystems/unstoppable-wallet-android">Android</a>
              </>
            }
          />
          <Card
            title={
              <img src="/images/cards/unstoppable-wallet.png" alt="" />
            }
            info={<>Only you can manage your funds. Privacy, independence and reliability are the main principles of our products</>}
            cover="/images/cards/unstoppable-wallet-screen.png"
            actionsLeft={
              <a href="/">Learn more</a>
            }
            actionsRight={
              <>
                <a href="https://github.com/horizontalsystems/unstoppable-wallet-ios">IOS</a> |s&nbsp;
                <a href="https://github.com/horizontalsystems/unstoppable-wallet-android">Android</a>
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
                <div className="Edge-pagination-icon" onClick={() => events.navigate(4)}>
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
