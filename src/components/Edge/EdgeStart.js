import React from 'react'
import EdgeCorner from './EdgeCorner'
import colors from '../../scss/utils.scss'

export default function EdgeStart({ colorName }) {
  const color = colors[colorName]

  return (
    <div className="Edge-start">
      <div className="Edge-bg">
        <div className="Edge-start-rest" style={{ background: color }} />
        <EdgeCorner fill={color} isEnd={false} />
      </div>
    </div>
  )
}
