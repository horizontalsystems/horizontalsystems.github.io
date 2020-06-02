import React from 'react'
import Card from './Card'
import './CardCode.scss'

export default function CardCode({ title, info, actions }) {
  return (
    <div className="CardCode">
      <Card dark>
        <div className="Card-title">{title}</div>
        <div className="Card-info Card-info--grey">{info}</div>
        <div className="Card-bottom">
          {actions}
        </div>
      </Card>
    </div>
  )
}
