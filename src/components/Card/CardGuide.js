import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import './CardGuide.scss'

export default function CardGuide({ title, info, cover }) {
  const Cover = styled.div`
    background-image: image-set(
      url(${`/images/cards/${cover}.png`}) 1x,
      url(${`/images/cards/${cover}@2x.png`}) 2x,
      url(${`/images/cards/${cover}@3x.png`}) 3x
    );
  `
  return (
    <div className="CardGuide">
      <Card>
        <div className="Card-title Card-title--big">{title}</div>
        <div className="Card-info Card-info--white">{info}</div>
      </Card>
      <Cover className="Card-cover" />
    </div>
  )
}
