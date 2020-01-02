import React from 'react'
import Icon from '../Icon/Icon'

import './ButtonNav.scss'

function ButtonNav({ icon, text }) {
  return (
    <div className="bannerNav">
      <Icon name={icon} /> {text}
    </div>
  )
}

export default ButtonNav
