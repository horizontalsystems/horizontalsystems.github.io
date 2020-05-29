import React from 'react';

import Slick from 'react-slick';
import SlideArrow from './SlideArrow'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss'

function Slider({ slidesToShow, slidesToScroll, children, bgColor = 'green' }) {
  let arrowColor
  if (bgColor === 'green') {
    arrowColor = 'white'
  }

  const settings = {
    dots: true,
    slidesToShow,
    slidesToScroll,
    nextArrow: <SlideArrow color={arrowColor} name="right" />,
    prevArrow: <SlideArrow color={arrowColor} name="left" />,
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
    <div className="Slider">
      <Slick {...settings}>
        {children}
      </Slick>
    </div>
  );
}

export default Slider
