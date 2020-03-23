import { createElement } from 'react'
import cn from 'classnames'
import './Container.scss'

function Container({ children, className, fluid }) {

  const containerType = fluid
    ? 'Container-fluid'
    : 'Container'

  return createElement('div', {
    className: cn(containerType, className),
    children
  })
}

export default Container
