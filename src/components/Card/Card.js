import React from 'react'
import cn from 'classnames'

import './Card.scss'

function Card({ dark, children }) {
  return (
    <div className={cn('Card', { 'Card-dark': dark })}>
      {children}
    </div>
  )
}

export default Card
