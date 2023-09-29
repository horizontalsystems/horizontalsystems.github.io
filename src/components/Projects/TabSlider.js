import React, { useRef, useState } from 'react'
import cn from 'classnames'
import Slider from '../Slider/Slider'

import { ReactComponent as ArrowRight } from '../Icon/arrow-right.svg'

function TabSlider({ title, learnMore, rtl, tabs = {} }) {
  const [tabIndex, setTabIndex] = useState(0)
  const sliderRef = useRef()

  const afterChange = index => {
    setTabIndex(index)
  }
  const onChangeTab = index => {
    setTabIndex(index)
    sliderRef.current.slickGoTo(index)
  }

  const headers = Object.keys(tabs)
  const values = Object.values(tabs)

  const tabSection =
    <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
      <div>
        {title && <div className="Projects-card-title Projects-card-title--light">{title}</div>}

        <div className="Projects-tab mt-5">
          {headers.map((item, i) =>
            <div key={i} className={cn('Projects-tab-item', { active: i === tabIndex })} onClick={() => onChangeTab(i)}>
              {item}
            </div>
          )}
        </div>

        <div className="Projects-tab-content">
          {values[tabIndex]}
        </div>
      </div>

      {learnMore && <div className="Edge-content-start mt-5 sm-hidden">
        <a className="Edge-icon-link" target="_blank" rel="noopener noreferrer" href={learnMore}>
          Learn More <ArrowRight className="pl-16" />
        </a>
      </div>}
    </div>

  const imageSection =
    <div className="col-sm-12 col-md-6">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-sm-12">
          <Slider className="m-0" slidesToScroll={1} slidesToShow={1} bgColor="dark" dots={false} refs={sliderRef} afterChange={afterChange} zeroMargin>
            <div>
              <div className="Projects-image-wrap">
                <img
                  className="Projects-image"
                  src="/images/projects/wallet.png"
                  srcSet="/images/projects/wallet@2x.png 2x"
                  alt="" />
              </div>
            </div>
            <div>
              <div className="Projects-image-wrap">
                <img
                  className="Projects-image"
                  src="/images/projects/market.png"
                  srcSet="/images/projects/market@2x.png 2x"
                  alt="" />
              </div>
            </div>
            <div>
              <div className="Projects-image-wrap">
                <img
                  className="Projects-image"
                  src="/images/projects/defi.png"
                  srcSet="/images/projects/defi@2x.png 2x"
                  alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {learnMore && <div className="Edge-content-start md-hidden">
        <a className="Edge-icon-link justify-content-start" target="_blank" rel="noopener noreferrer" href={learnMore}>
          Learn More <ArrowRight className="pl-16" />
        </a>
      </div>}
    </div>

  return (
    <div className="row">
      {rtl ? imageSection : tabSection}
      {rtl ? tabSection : imageSection}
    </div>
  )
}

export default TabSlider
