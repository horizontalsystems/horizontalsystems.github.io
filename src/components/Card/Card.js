import React, { createElement } from 'react'
import './Card.scss'

function Card({ img, srcSet, title, actions, children }) {
  let imageTag = null
  if (img) {
    imageTag = createElement('img', {
      className: "card-screen-img",
      src: img,
      alt: title,
      srcSet: srcSet
    })
  }
  return (
    <div className="card">
      {imageTag && <div className="card-screen">
        {imageTag}
      </div>}
      <div className="card-info">
        <div className="card-content">
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
