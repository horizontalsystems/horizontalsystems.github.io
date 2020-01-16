import React, { Component } from 'react'
import cn from 'classnames'
import Container from '../Container/Container'
import Guides from './Buides/Guides'
import Code from './Code/Code'
import Apps from './Apps/Apps'

import './Tabs.scss'

class Tabs extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: 'guides',
      current: <Guides />,
      tabBack: <div className="tab-background" />
    };
  }

  switch = tab => {
    if (tab === this.state.active) {
      return
    }
    this.setState({ current: null, tabBack: null })

    let animateTab
    let animate
    let content

    switch (tab) {
      case 'apps': {
        animateTab = 'fadeInRight'
        animate = 'fadeInLeft'
        content = <Container children={<Apps />} />
        break
      }
      case 'guides': {
        animateTab = ('apps' !== this.state.active) ? 'fadeInRight' : 'fadeInLeft'
        animate = ('apps' !== this.state.active) ? 'fadeInLeft' : 'fadeInRight'
        content = <Guides />
        break
      }
      default: {
        animateTab = 'fadeInLeft'
        animate = 'fadeInRight'
        content = <Container children={<Code />} />
      }
    }

    // This trick is needed to animate tab content persistently
    setTimeout(() => {
      const current = <div className={animate}>{content}</div>
      const tabBack = <div className={`tab-background ${animateTab}`} />
      this.setState({ active: tab, current: current, tabBack })
    })
  };

  render() {
    const { current, active, tabBack } = this.state
    const isActive = tab => tab === active

    return (
      <div>
        <Container>
          <div className="Tabs">
            <div className={cn('tab-item', { active: isActive('apps') })} onClick={() => this.switch('apps')}>
              <div className="tab-title">Invest</div>
              <div className="tab-info">
                Invest in crypto safely and privately. We build beautiful and uncensorable apps for those long on crypto.
              </div>
              {tabBack}
            </div>
            <div className={cn('tab-item', { active: isActive('guides') })} onClick={() => this.switch('guides')}>
              <div className="tab-title">Learn</div>
              <div className="tab-info">
                Learn how Bitcoin and other blockchains work. Discover prooven decentralized projects operating on top of them. 
              </div>
              {tabBack}
            </div>
            <div className={cn('tab-item', { active: isActive('code') })} onClick={() => this.switch('code')}>
              <div className="tab-title">Build</div>
              <div className="tab-info">
                Build unstoppable apps that never go offline and censorship-resistant. Our code is open and unconditionally free.
              </div>
              {tabBack}
            </div>
          </div>
        </Container>
        {current}
      </div>
    )
  }
}

export default Tabs
