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
            <div className="bottom-menu">
              <a href="mailto:hsdao@protonmail.ch"><img src="/images/menu/email.png" alt="" /> hsdao@protonmail.ch</a>
            </div>
            <div className="bottom-menu">
              <a href="https://t.me/unstoppable_wallet"><img src="/images/menu/channel.png" alt="" /> Live Chat</a>
            </div>
            <div className="bottom-menu">
              <a href="https://github.com/horizontalsystems"><img src="/images/menu/github.png" alt="" /> Github</a>
            </div>
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
