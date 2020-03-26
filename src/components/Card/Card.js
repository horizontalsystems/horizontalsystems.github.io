import React from 'react'
import cn from 'classnames'

import './Card.scss'

function Card({ title, info, actionsLeft, actionsRight, cover, dark }) {
  return (
    <div className={cn('Card', {'Card-dark': dark})}>
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

      {cover && <img className="Card-cover" src={cover} alt="" />}
    </div>
  )
}

export default Card
