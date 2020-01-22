import React from 'react'
import cn from 'classnames'
import './ButtonText.scss'

function ButtonText({ text, onClick, link }) {
  const content = link
    ? <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>
    : text

  return (
    <div className={cn('ButtonText', { disabled: !onClick })} onClick={onClick}>
      {content}
    </div>
  )
}

export default ButtonText
