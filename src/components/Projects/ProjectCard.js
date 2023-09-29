import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowRight } from '../Icon/arrow-right.svg'

export default function ProjectCard({ title, info, link, image }) {
  let gradient
  if (image === 'smart-pays') {
    gradient = <img className="Screen-right-half top-0" src="/images/projects/card/dark-top-right.svg" alt="" />
  } else if (image === 'referral-system') {
    gradient = <img className="Screen-left-half bottom-0" src="/images/projects/card/green-bottom-left.svg" alt="" />
  }

  return (
    <div className="col-lg-6 col-sm-12 d-flex align-items-stretch">
      <div className="Projects-card">
        {gradient}

        <div className="Projects-card-title Projects-card-title--light">{title}</div>
        <div className="Projects-card-image">
          <img src={`/images/projects/${image}.png`} alt="" />
        </div>
        <div className="Projects-tab-content">{info}</div>

        {link && <div className="Edge-content-start mt-5">
          <Link to={link} className="Edge-icon-link">
            Learn More <ArrowRight className="pl-16" />
          </Link>
        </div>}
      </div>
    </div>
  )
}
