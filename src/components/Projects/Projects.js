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
          Secure crypto wallet engineered for easy self-custody and professional portfolio management.
        </div>
      </Container>

      <div className="Projects-card">
        <img className="Screen-right-half top-0" src="/images/projects/card/green-top-right.svg" alt="" />
        <TabSlider
          title={<>Invest Without <br /> Borders</>}
          tabs={{
            Wallet: 'Easy, secure, private and non-custodial cryptocurrency multi- wallet capable of working with a wide range of cryptocurrencies.',
            Market: 'Comprehensive overview of cryptocurrency market and in- depth asset analytics covering off-chain and on-chain data.',
            DeFi: 'Single interface to access the world of DeFi (Decentralized Finance) i.e. trading, staking, lending, borrowing and yield generation opportunities.'
          }}
          learnMore="https://unstoppable.money/" />
      </div>

      <div className="row g-32px mt-1">
        <ProjectCard
          title={<>Solutions for <br /> Smart Pays</>}
          info="This system is an innovative solution that allows the automatic payment of wages to participants addresses. The system works based on a smart contract written on a blockchain platform."
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
