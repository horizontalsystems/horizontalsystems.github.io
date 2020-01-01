import React from 'react'
import './Card.scss'

function Card({ img, title, actions, children }) {
  return (
    <div className="card">
      {img && <div className="card-screen">
        <img src={img} alt={title} />
      </div>}
      <div className="card-info">
        <div>
          <div className="card-title">
            {title}
          </div>
          <div className="card-description">
            {children}
          </div>
        </div>
        <div className="card-actions">
          {actions}
        </div>
      </div>
    </div>
  )
}

export default Card
