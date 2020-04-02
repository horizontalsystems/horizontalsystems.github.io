import React from 'react'
import cn from 'classnames'
import throttle from 'lodash.throttle'

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

  let first = null

  const onScroll = throttle(event => {
    if (!first) {
      first = scroller.childNodes.item(1)
    }

    if  (!scroller || !first) {
      return
    }

    const index = parseInt((scroller.scrollLeft + 24) / first.offsetWidth)

    for (let i = 0; i < pagination.children.length; i++) {
      var item = pagination.children[i]
      if (i === index) {
        item.classList.add('active')
      } else  {
        item.classList.remove('active')
      }
    }
  }, 300)

  const paginationItems = [...Array(children.length)].map((_, index) =>
    <span
      key={index}
      className={cn('Pagination-item', { active: index === 0 })}
      onClick={() => onClick(index)}
    />)

  return (
    <div className="Scroller-container">
      <div className="Scroller-wrap">
        <div className="Scroller-pagination" style={style} ref={r => pagination = r}>
          {paginationItems}
        </div>
        <div className="Scroller" style={style} ref={r => scroller = r} onScroll={onScroll}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Scroller
