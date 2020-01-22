import { createElement } from 'react'
import cn from 'classnames'
import './Container.scss'

function Container({ children, className }) {
  return createElement('div', { className: cn('Container', className), children })
}

export default Container
