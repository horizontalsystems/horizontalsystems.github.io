import React from 'react'
import Container from '../Container/Container'
import './Footer.scss'

function Footer() {
  return (
    <footer className="Footer">
      <Container>
        <div className="footer-block small-text">
          <div className="footer-menu">
            <div className="bottom-menu bottom-menu-title">Contact</div>
            <div className="bottom-menu"><img src="/images/menu/email.png" alt="" /> hsdao@protonmail.ch</div>
            <div className="bottom-menu"><img src="/images/menu/channel.png" alt="" /> Live Chat</div>
            <div className="bottom-menu"><img src="/images/menu/github.png" alt="" /> Github</div>
          </div>
          <div className="footer-menu">
            <div className="bottom-menu bottom-menu-title">Follow</div>
            <div className="bottom-menu"><img src="/images/menu/email.png" alt="" /> Twitter</div>
            <div className="bottom-menu"><img src="/images/menu/channel.png" alt="" /> Telegram</div>
            <div className="bottom-menu"><img src="/images/menu/youtube.png" alt="" /> Youtube</div>
          </div>
          <div className="footer-menu">
            <div className="bottom-menu bottom-menu-title">Donate</div>
            <div className="bottom-menu"><img src="/images/menu/btc.png" alt="" /> Copy BTC address</div>
            <div className="bottom-menu"><img src="/images/menu/eth.png" alt="" /> Copy ETH address</div>
            <div className="bottom-menu"><img src="/images/menu/eos.png" alt="" /> Copy EOS address</div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
