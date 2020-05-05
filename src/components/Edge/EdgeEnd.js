import React from 'react'
import EdgeCorner from './EdgeCorner'
import colors from '../../scss/utils.scss'

export default function EdgeEnd({ colorName }) {
  const color = colors[colorName]

  return (
    <div className="Edge-end">
      <div className="Edge-bg">
        <EdgeCorner fill={color} isEnd />
        <div className="Edge-end-rest" style={{ background: color }} />
      </div>
    </div>
  )
}
