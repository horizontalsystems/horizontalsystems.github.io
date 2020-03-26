import React from 'react'
import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'

import Card from '../Card/Card'
import Scroller from '../Scroller/Scroller'

import './Guides.scss'

class Guides extends React.Component {
  state = {
    padding: 0
  }

  componentDidMount() {
    const rect = this.content.getBoundingClientRect()
    this.setState({ padding: rect.left })
  }

  render() {
    return (
      <Container className="Guides" fluid>
        <Edge className="Edge-header">
          <div className="Edge-start bg-white" />
          <Container>
            <div className="Edge-content" ref={r => this.content = r}>
              <div className="Edge-content-start">
                <div className="Icon-wrap">
                  <Icon name="guides" fill="none" viewBox="0 0 52 56" size="52" />
                  <div className="Icon-label color-steal-dark">Guides</div>
                </div>
              </div>
              <div className="Edge-content-end Edge-content-end-text color-white">
                We study what different blockchain projects are and provide them in an accessible language
              </div>
            </div>
          </Container>
        </Edge>

        <Scroller padding={this.state.padding}>
          <Card
            title="Libra Explained In Simple Terms"
            info={<>What is Bitcoin? <br />What makes Bitcoin so unique? <br />And how can you invest? <br /></>}
            cover="/images/cards/libra.png"
            actionsLeft={
              <a href="/">Preview</a>
            }
          />
          <Card
            title="Bitcoin Explained In Simple Terms"
            info={<>What is Bitcoin? <br />What makes Bitcoin so unique? <br />And how can you invest? <br /></>}
            cover="/images/cards/bitcoin.png"
            actionsLeft={
              <a href="/">Preview</a>
            }
          />
        </Scroller>

        <Edge className="Edge-bottom">
          <Container>
            <div className="Edge-content">
              <div className="Edge-content-start" />
              <div className="Edge-content-end">
                <div className="Edge-pagination color-white-50">04 / 07</div>
                <div className="Edge-pagination-icon">
                  <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" />
                </div>
              </div>
            </div>
          </Container>

          <div className="Edge-end bg-dark" />
        </Edge>
      </Container>
    )
  }
}

export default Guides
