import React from 'react'
import './ButtonText.scss'

function ButtonText({ text, onClick, link }) {
  let content = text
  if (link) {
    content = <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>
  }
  return (
    <div className="ButtonText" onClick={onClick}>
      {content}
    </div>
  )
}

export default ButtonText
