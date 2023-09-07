import React from 'react'
import cn from 'classnames'

import Container from '../Container/Container'

import './Slogan.scss'

function Slogan({ title, textEnd }) {
  return (
    <Container>
      <div className="Slogan">
        <div className={cn('Slogan-title', {'text-end': textEnd})}>
          {title}
        </div>
      </div>
    </Container>
  )
}

export default Slogan
