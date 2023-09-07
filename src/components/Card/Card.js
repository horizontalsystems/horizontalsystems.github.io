import React from 'react'
import cn from 'classnames'

import './Card.scss'

function Card({ className, dark, children }) {
  return (
    <div className={cn('Card', { 'Card-dark': dark }, className)}>
      {children}
    </div>
  )
}

export default Card
