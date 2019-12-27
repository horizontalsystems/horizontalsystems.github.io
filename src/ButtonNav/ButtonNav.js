import React from 'react'
import './ButtonNav.scss'

function ButtonNav({ img, text }) {
  return (
    <div className="bannerNav">
      <img src={img} alt={text} /> {text}
    </div>
  )
}

export default ButtonNav
