import React from 'react'
import cn from 'classnames'

import './Card.scss'

function Card({ title, info, actions, cover, dark }) {
  return (
    <div className={cn('Card', { 'Card-dark': dark })}>
      <div className="Card-title">{title}</div>
      <div className="Card-info">{info}</div>
      <div className="Card-bottom">
        <div className="actions-left">
          {actions}
        </div>
      </div>

      {cover && <img
        className="Card-cover"
        src={`/images/cards/${cover}.png`}
        srcSet={`/images/cards/${cover}@2x.png 2x, /images/cards/${cover}@3x.png 3x`}
        alt=""
      />}
    </div>
  )
}

export default Card
