import React from 'react'
import Card from './Card'
import './CardFeatured.scss'

export default function CardFeatured({ title, info, cover }) {
  return (
    <div className="CardFeatured">
      <Card>
        <div className="Card-title">{title}</div>
        <div className="Card-Slogan">{info}</div>
      </Card>
      <img
        className="CardFeatured-image"
        src={`/images/cards/${cover}.png`}
        srcSet={`/images/cards/${cover}@2x.png 2x, /images/cards/${cover}@3x.png 3x`}
        alt={title}
      />
    </div>
  )
}
