import React, { Component } from 'react'
import cn from 'classnames'
import Container from '../Container/Container'
import Guides from './Buides/Guides'
import Code from './Code/Code'
import Apps from './Apps/Apps'

import './Tabs.scss'

class Tabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: 'apps',
      current: <Container children={<Apps />} />
    };
  }

  switch = tab => {
    let content

    switch (tab) {
      case 'apps': {
        content = <div className="fadeInLeft"><Container children={<Apps />} /></div>
        break
      }
      case 'guides': {
        let animation = 'fadeInRight'
        if (this.state.active !== 'apps') {
          animation = 'fadeInLeft'
        }
        content = <div className={animation}><Guides animateToRight={animation} /></div>
        break
      }
      default: {
        content = <div className="fadeInRight"><Container children={<Code />} /></div>
      }
    }

    this.setState({ active: tab, current: content })
  };

  isActive = tab => {
    return this.state.active === tab
  }

  render() {
    return (
      <div>
        <Container>
          <div className="Tabs">
            <div className={cn('tab-item', { active: this.isActive('apps') })} onClick={() => this.switch('apps')}>
              <div className="tab-title">Apps</div>
              <div className="tab-info">
                Horizontal Systems build serverless applications around the idea of private wealth and privacy.
              </div>
            </div>
            <div className={cn('tab-item', { active: this.isActive('guides') })} onClick={() => this.switch('guides')}>
              <div className="tab-title">Guides</div>
              <div className="tab-info">
                Understand how Bitcoin, Ethereum, EOS, Libra and other major blockchains work. We explain projects in
                simple terms
              </div>
            </div>
            <div className={cn('tab-item', { active: this.isActive('code') })} onClick={() => this.switch('code')}>
              <div className="tab-title">Code</div>
              <div className="tab-info">
                We believe good ideas should be Unstoppable. We building decentralized public and open source services.
              </div>
            </div>
          </div>
        </Container>
        {this.state.current}
      </div>
    )
  }
}

export default Tabs
