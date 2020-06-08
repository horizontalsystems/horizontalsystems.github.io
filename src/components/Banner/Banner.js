import React from 'react'
import cn from 'classnames'
import './Banner.scss'

function Banner({ text, cover, textLight, action }) {
  return (
    <div className="Banner">
      <div className="Banner-start">
        <div className={cn('Banner-text', { 'Banner-text--light': textLight })}>
          {text}
        </div>
        <div className="Banner-action">
          {action}
        </div>
      </div>
      <div className="Banner-end">
        <img
          className="Banner-image"
          src={`/images/banner/${cover}.png`}
          srcSet={`/images/banner/${cover}@2x.png 2x, /images/banner/${cover}@3x.png 3x`}
          alt="" />
      </div>
    </div>
  )
}

export default Banner
