import React from 'react'
import cn from 'classnames'

import Slick from 'react-slick'
import SlideArrow from './SlideArrow'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Slider.scss'

function Slider({ className, slidesToShow, slidesToScroll, children, zeroMargin, afterChange, refs, bgColor = 'green', dots = true, }) {
  let arrowColor
  if (bgColor === 'green') {
    arrowColor = 'white'
  }

  const settings = {
    dots,
    slidesToShow,
    slidesToScroll,
    afterChange,
    nextArrow: <SlideArrow color={arrowColor} name="right" zeroMargin={zeroMargin} />,
    prevArrow: <SlideArrow color={arrowColor} name="left" zeroMargin={zeroMargin} />,
    customPaging: () => (
      <div className={`Dot Dot-${bgColor}`} />
    ),
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }

  return (
    <div className={cn('Slider', className)}>
      <Slick {...settings} ref={refs}>
        {children}
      </Slick>
    </div>
  );
}

export default Slider
