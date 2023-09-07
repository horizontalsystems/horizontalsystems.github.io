import React from 'react'

import ProjectCard from './ProjectCard'
import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import TabSlider from './TabSlider'

import './Projects.scss'

function Projects() {
  return (
    <Container className="Projects">
      <Edge className="Edge-header">
        <Container className="d-flex justify-content-center">
          <div className="Edge-title color-green">
            Projects
          </div>
        </Container>
      </Edge>

      <Container className="Edge-center">
        <div className="Edge-text color-grey">
          Wallet for global cryptocurrency markets, with privacy and access without borders
        </div>
      </Container>

      <div className="Projects-card">
        <img className="Screen-right-half top-0" src="/images/projects/card/green-top-right.svg" alt="" />
        <TabSlider
          title="Invest Without Borders"
          tabs={{
            Wallet: 'Unstoppable Wallet is a secure and decentralized cryptocurrency wallet that gives users full control over their digital assets, and supports a wide range of cryptocurrencies.',
            Market: 'The Market tab in Unstoppable Wallet provides users with a comprehensive overview, analytics data of the cryptocurrency market, allowing them to monitor the latest prices, market trends.',
            DeFi: 'Enter the world of Decentralized Finances with unconditional opportunities. Swap assets, stake assets and interact with any DeFi service via WalletConnect.'
          }}
          learnMore="https://unstoppable.money/" />
      </div>

      <div className="row g-32px mt-1">
        <ProjectCard
          title={<>Solutions for <br /> Smart Pays</>}
          info="This system is an innovative solution that allows the automatic payment of wages to participants addresses. The system works based on a smart contract written on a blockchain platform."
          link="/projects"
          image="smart-pays"
        />

        <ProjectCard
          title="Crypto Subscription & Referral System"
          info="This system is designed to automate the services of services that provide their services by subscription, receipt of payment, accounting referral program on blockchain."
          image="referral-system"
        />
      </div>
    </Container>
  )
}

export default Projects
