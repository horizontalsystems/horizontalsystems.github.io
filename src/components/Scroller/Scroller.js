import React from 'react'
import cn from 'classnames'

import './Scroller.scss'

function Scroller({ children, padding }) {
  let scroller = null

  const style = {
    paddingLeft: `${padding}px`,
  }

  const onClick = i => {
    if (scroller == null) return

    const index = parseInt(i)
    const first = scroller.childNodes.item(1)

    scroller.scrollLeft = (first.offsetWidth + 24) * index
  }

  const pagination = [...Array(children.length)].map((_, index) =>
    <span
      key={index}
      className={cn('Pagination-item', { active: index === 0 })}
      onClick={() => onClick(index)}
    />)

  return (
    <div className="Scroller-container">
      <div className="Scroller-inner">
        <div className="Scroller-wrap">
          <div className="Scroller" style={style} ref={r => scroller = r}>
            {children}
          </div>
        </div>
        <div className="Scroller-pagination" style={style}>
          {pagination}
        </div>
      </div>
    </div>
  )
}

export default Scroller
