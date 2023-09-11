import React from 'react'
import cn from 'classnames'

import './Edge.scss'

export default function Edge({ className, children }) {
  return (
    <div className={cn('Edge', className)}>
      {children}
    </div>
  )
}
