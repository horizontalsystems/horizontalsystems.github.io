import React from 'react'

import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Container from '../Container/Container'

import './Home.css'

function Home() {
  return (
    <Container fluid>
      <Header />
      <Banner />
    </Container>
  )
}

export default Home
