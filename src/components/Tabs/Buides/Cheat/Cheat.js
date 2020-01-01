import React from 'react'
import './Cheat.scss'

function Cheat({ title, description }) {
  return (
    <div className="Cheat">
      <div className="cheat-title">
        {title}
      </div>
      <div className="cheat-description">
        {description}
      </div>
    </div>
  )
}

export default Cheat
