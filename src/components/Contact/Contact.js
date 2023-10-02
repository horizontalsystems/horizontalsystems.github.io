import { useParallax } from 'react-scroll-parallax'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import SubscribeForm from './SubscribeFormModal'
import events from '../../core/EventEmitter'

import Mail from './mail.svg'
import Twitter from './twitter.svg'
import Github from './github.svg'
import Newsletter from './newsletter.svg'

import './Contact.scss'

function Contact() {
  const openForm = () => {
    events.showModal(<SubscribeForm formId="2166978" formCode="d8h6h7" onClose={events.hideModal} />)
  }

  const parallax = useParallax({
    translateX: [10, -30],
  })

  return (
    <Container className="Contact" fluid>
      <div className="Screen-absolute-full z-0" style={{ background: 'url(/images/home/paths-green.svg)' }} />
      <img
        src="/images/home/gradient.svg"
        className="gradient-layout position-absolute"
        alt=""
        ref={parallax.ref}
        onLoad={() => parallax.controller.update()}
      />

      <Edge className="Edge-header">
        <Container className="d-flex justify-content-center">
          <div className="Edge-title line-h-normal color-green">
            Contacts
          </div>
        </Container>
      </Edge>

      <Container clipped={false}>
        <div className="row g-32px">
          <div className="col-sm-12 col-md-6">
            <div className="Contact-item">
              <a className="Contact-item-head" href="mailto:hsdao@protonmail.com">
                <img src={Mail} alt="" />
                <div className="Contact-item-title">hsdao@protonmail.com</div>
              </a>
              <div className="Contact-item-info">
                Would like to connect? Contact our team via email.
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="Contact-item">
              <a className="Contact-item-head" href="https://twitter.com/HorizontalHQ" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="" />
                <div className="Contact-item-title">Twitter</div>
              </a>
              <div className="Contact-item-info">
                Follow latest updates and send DMs on Twitter.
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="Contact-item">
              <a className="Contact-item-head" href="https://github.com/horizontalsystems" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="" />
                <div className="Contact-item-title">Github</div>
              </a>
              <div className="Contact-item-info">
                Report product issues and suggest improvements.
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="Contact-item">
              <div className="Contact-item-head" onClick={openForm}>
                <img src={Newsletter} alt="" />
                <div className="Contact-item-title">Newsletter</div>
              </div>
              <div className="Contact-item-info">
                Subscribe to our newsletter for exclusive updates.
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Edge className="Edge-bottom"/>
    </Container>
  )
}

export default Contact
