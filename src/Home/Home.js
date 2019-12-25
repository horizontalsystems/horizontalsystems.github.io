import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import Tabs from '../Tabs/Tabs'

import './Home.scss'

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <Tabs />
      <Footer />
    </div>
  )
}

export default Home
