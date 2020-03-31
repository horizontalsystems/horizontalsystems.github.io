import React from 'react'
import cn from 'classnames'

import './Scroller.scss'

function Scroller({ children, padding }) {
  let scroller = null
  let pagination = null

  const style = {
    paddingLeft: `${padding}px`,
  }

  const selectItem = id => {
      pagination.childNodes.forEach((item, index) => {
      const classNames = item.classList

      if (index === id) {
        classNames.add('active')
      } else {
        classNames.remove('active')
      }
    })
  }

  const onClick = i => {
    if (scroller == null) return
    if (pagination != null) selectItem(i)

    const index = parseInt(i)
    const first = scroller.childNodes.item(1)
    const scrollLeft = (first.offsetWidth + 24) * index

    scroller.scroll({
      top: 0,
      left: scrollLeft,
      behavior: 'smooth'
    });
  }

  const paginationItems = [...Array(children.length)].map((_, index) =>
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
        <div className="Scroller-pagination" style={style} ref={r => pagination = r}>
          {paginationItems}
        </div>
      </div>
    </div>
  )
}

export default Scroller
