import React from 'react'
import './ButtonText.scss'

function ButtonText({ text, onClick }) {
  return (
    <div className="ButtonText" onClick={onClick}>
      {text}
    </div>
  )
}

export default ButtonText
