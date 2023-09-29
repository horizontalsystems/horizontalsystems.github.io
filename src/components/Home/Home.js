import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

import Header from '../Header/Header'
import Slogan from '../Header/Slogan'
import Container from '../Container/Container'

import './Home.scss'

function Home() {
  const paths = {
    expanded: false,
    children: (
      <div
        className="Screen-absolute-full"
        style={{ backgroundImage: 'url("/images/home/paths-green.svg")', backgroundRepeat: 'repeat' }}
      />
    )
  }

  const headline = {
    translateY: [0, 100],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <Slogan title={<>Solutions for Smart <br />Investments</>} />
  }

  const gradientStart = {
    translateX: [-1, -45],
    shouldAlwaysCompleteAnimation: true,
    children: <img src="/images/home/gradient.svg" className="gradient-layout" alt="" />
  }

  return (
    <Container fluid>
      <Header />

      <ParallaxBanner
        layers={[paths, gradientStart, headline]}
        className="full"
      />

    </Container>
  )
}

export default Home
