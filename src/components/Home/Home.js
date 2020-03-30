import React from 'react'

import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Container from '../Container/Container'

import './Home.scss'

function Home() {
  return (
    <Container fluid>
      <div className="Home-half" />
      <Header />
      <Banner />
    </Container>
  )
}

export default Home
