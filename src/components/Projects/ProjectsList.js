import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowRight } from '../Icon/arrow-right.svg'
import Header from '../Header/Header'
import Container from '../Container/Container'
import Slogan from '../Header/Slogan'
import cn from 'classnames'
import Edge from '../Edge/Edge'
import TabSlider from './TabSlider'

import './ProjectsList.scss'

function ProjectsList() {
  return (
    <Container fluid>
      <div id="page-1">
        <Main />
      </div>
      <div id="page-5">
        <Container>
          <Product
            title="What is it?"
            info="This payroll management system allows you to automatically calculate and distribute daily wages to participants."
            image="what-is-it"
            rtl />
          <Product
            title="For What?"
            info="This smart contract automates the entire payroll process by taking care of accounting and management responsibilities."
            image="for-what"
          />
          <Product
            title="How it works?"
            info="The smart contract manages funds, processes a database of participant information, and subsequently replenishes participant accounts."
            image="how-it-works"
            rtl
          />
        </Container>

        <ProductDetails
          title="Implementation"
          info="The smart contract defines three roles: owner, moderator, and member."
        />

        <Container>
          <TabSlider
            tabs={{
              Owner: 'The owner has the rights to deposit or withdraw funds, appoint or remove moderators and members, set member salaries',
              Member: 'The Market tab in Unstoppable Wallet provides users with a comprehensive overview, analytics data of the cryptocurrency market, allowing them to monitor the latest prices, market trends.',
              Moderator: 'Enter the world of Decentralized Finances with unconditional opportunities. Swap assets, stake assets and interact with any DeFi service via WalletConnect.'
            }}
            rtl />
        </Container>

        <ProductDetails
          title="For business"
          info="This service can be seamlessly integrated into your business. Contact us to explore how we can customize it to meet your specific needs and requirements."
        />

        <Container>
          <div className="Projects-card d-flex flex-row">
            <img className="Screen-left-half bottom-0" src="/images/projects/card/green-bottom-left.svg" alt="" />
            <div className="row">
              <div className="col-md-6 col-sm-12 d-flex flex-column">
                <div className="Projects-card-title Projects-card-title--light">Crypto Subscription & Referral System</div>
                <div className="Projects-card-image">
                  <img src="/images/projects/referral-system.png" alt="" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 d-flex flex-column">
                <div className="Projects-tab-content d-flex align-items-end h-100">
                  This system is designed to automate the services of services that provide their services by subscription, receipt of payment,
                  accounting referral program on blockchain.
                </div>
                <div className="Edge-content-start mt-5">
                  <Link to="/abc" className="Edge-icon-link">
                    Learn More <ArrowRight className="pl-18" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>

      </div>
    </Container>
  )
}

function Main() {
  return (
    <div className="position-relative">
      <Header navigate={false} />
      <div className="Screen-right-half" style={{ backgroundImage: 'url("/images/home/paths-green-gradient.svg")', backgroundRepeat: 'no-repeat' }} />
      <Slogan title={<>Salary management <br />system on the <br />blockchain</>} textEnd />
    </div>
  )
}

function Product({ title, info, image, rtl }) {
  const start =
    <div className={cn('Product-text', { 'Product-text-end': !rtl })}>
      <div className="Edge-title color-green">{title}</div>
      <div className="Product-info py-4">{info}</div>
    </div>

  const end =
    <div className="Product-schema">
      <img className="Product-image" src={`/images/projects/product/${image}.svg`} alt="" />
    </div>

  return (
    <div className={cn('Product pt-5', { 'Product-end': !rtl })}>
      {rtl ? end : start}
      {rtl ? start : end}
    </div>
  )
}

function ProductDetails({ title, info }) {
  return (
    <Container>
      <Edge className="Edge-header">
        <Container className="d-flex justify-content-center">
          <div className="Edge-title color-green">
            {title}
          </div>
        </Container>
      </Edge>

      <Container className="Edge-center">
        <div className="Edge-text color-grey">
          {info}
        </div>
      </Container>
    </Container>
  )
}

export default ProjectsList

