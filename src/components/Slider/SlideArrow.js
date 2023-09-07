import React from 'react'
import Icon from '../Icon/Icon'

export function SlideArrow({ name, onClick, zeroMargin, color = '#05C46B' }) {
  let className = `slick-${name}`
  if (zeroMargin) {
    className += ` ${className}-zero`
  }

  return (
    <div className={`slick-arrow ${className}`} onClick={onClick}>
      <Icon name={`arrow-${name}`} viewBox="0 0 12 42" stroke={color} fill="none" width="12" height="42" />
    </div>
  )
}

export default SlideArrow
