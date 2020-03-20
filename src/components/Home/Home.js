import React from 'react'

import Icon from '../Icon/Icon'
import './Home.scss'

function Home() {

  return (
    <div className="Home-Wrap">
      <img
        className="Home-bg"
        src="/images/home/mounts.png"
        srcSet="/images/home/mounts@2x.png 2x, /images/home/mounts@3x.png 3x"
        alt=""
      />

      <div className="Home">
        <div className="Slogan">
          We build products that help blockchain and cryptocurrency investors make better decisions.
        </div>
        <div className="Logo">
          <Icon name="logo" color="#05C46B" viewBox="0 0 40 40" size="40" />
        </div>
      </div>
    </div>
  )
}

export default Home
