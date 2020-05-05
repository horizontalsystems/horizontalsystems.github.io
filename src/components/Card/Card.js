import React from 'react'
import cn from 'classnames'

import './Card.scss'

function Card({ title, info, actionsLeft, actionsRight, cover, dark, comingSoon }) {
  return (
    <div className={cn('Card', { 'Card-dark': dark, 'Card-coming-soon': comingSoon })}>
      <div className="Card-title">{title}</div>
      <div className="Card-info">{info}</div>
      <div className="Card-bottom">
        <div className="actions-left">
          {actionsLeft}
        </div>
        {actionsRight && <div className="actions-right">
          {actionsRight}
        </div>}
      </div>

      {cover && <img
        className="Card-cover"
        src={`/images/cards/${cover}.png`}
        srcSet={`/images/cards/${cover}@2x.png 2x, /images/cards/${cover}@3x.png 3x`}
        alt=""
      />}
      {comingSoon && <div className="Screen-right-half paths-dark" />}
    </div>
  )
}

export default Card
