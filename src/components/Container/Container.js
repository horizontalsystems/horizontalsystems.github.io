import { createElement } from 'react'
import cn from 'classnames'
import './Container.scss'

function Container({ children, className, fluid, clipped = true }) {

  const containerType = fluid
    ? 'Container-fluid'
    : 'Container'

  return createElement('div', {
    className: cn(containerType, className, { 'Container-clipped': clipped }),
    children
  })
}

export default Container
