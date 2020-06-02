import React from 'react'
import Card from './Card'
import './CardGuide.scss'

export default function CardGuide({ title, label, info, cover }) {
  return (
    <div className="CardGuide">
      <Card>
        <div className="Card-title Card-title--big">{title}</div>
        <div className="Card-info Card-info--white">{info}</div>
      </Card>
      <img
        className="CardGuide-image"
        src={`/images/cards/${cover}.png`}
        srcSet={`/images/cards/${cover}@2x.png 2x, /images/cards/${cover}@3x.png 3x`}
        alt=""
      />
    </div>
  )
}
