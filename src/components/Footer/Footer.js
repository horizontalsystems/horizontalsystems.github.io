import React from 'react'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import './Footer.scss'

function Footer() {

  const onHover = (event) => {
    event.target.setAttribute('data-value', 'Copy to clipboard')
  }

  const onCopy = (event, str) => {
    const element = event.target
    event.preventDefault()

    element.setAttribute('data-value', 'Copied')

    const el = document.createElement('textarea')
    el.value = str
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  return (
    <footer className="Footer">
      <Container>
        <div className="footer-block">
          <div className="footer-menu">
            <div className="bottom-menu bottom-menu-title">Contact</div>
            <div className="bottom-menu">
              <a href="mailto:hsdao@protonmail.ch"><Icon name="mail" /> hsdao@protonmail.ch</a>
            </div>
            <div className="bottom-menu">
              <a href="https://twitter.com/HS_DAO"><Icon name="telegram" /> Twitter</a>
            </div>
            <div className="bottom-menu">
              <a href="https://github.com/horizontalsystems"><Icon name="github" /> Github</a>
            </div>
          </div>
          <div className="footer-menu">
            <div className="bottom-menu bottom-menu-title">Donate</div>
            <div className="bottom-menu" onClick={v => onCopy(v, '35GpEV5HmbPe9jsYM7kUmpdWVXsZNgJ7ik')}>
              <Icon name="btc" />
              <a href="/" className="copiable" onMouseEnter={onHover}> Copy BTC address</a>
            </div>
            <div className="bottom-menu" onClick={v => onCopy(v, 'bitcoincash:qpppw8r78knlt7acpekmzukqvr00lnsnfvtjpkw4ej')}>
              <Icon name="bch" />
              <a href="/" className="copiable" onMouseEnter={onHover}> Copy BCH address</a>
            </div>
            <div className="bottom-menu" onClick={v => onCopy(v, '0xc69f22E2A6C7fCb484a9a1F3488108e7B9B45F69')}>
              <Icon name="eth" />
              <a href="/" className="copiable" onMouseEnter={onHover}> Copy ETH address</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
