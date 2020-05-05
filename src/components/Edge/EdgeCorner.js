import React from 'react'

export default function EdgeCorner({ isEnd, viewBox = '0 0 240 200', fill = 'white' }) {
  let commands = ''
  let className = ''

  if (isEnd) {
    className = 'Edge-end-corner'
    commands = 'M176.569 23.4315C191.571 8.42855 211.92 0 233.137 0H240V200H0L176.569 23.4315Z'
  } else {
    className = 'Edge-start-corner'
    commands = 'M63.4315 176.569C48.4285 191.571 28.0802 200 6.86292 200L0 200L1.74846e-05 -2.09815e-05L240 0L63.4315 176.569Z'
  }

  return (
    <svg className={className} viewBox={viewBox} fill={fill}>
      <path d={commands} />
    </svg>
  )
}
