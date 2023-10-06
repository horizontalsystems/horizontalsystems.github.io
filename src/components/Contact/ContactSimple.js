import { useParallax } from 'react-scroll-parallax'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'

import './Contact.scss'
import './ContactSimple.scss'

function Contact() {

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
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="Contact-email">
            <a className="Contact-email-link" href="mailto:hello@horizontalsystems.io">
              <div className="Contact-email-text">hello@horizontalsystems.io</div>
            </a>
          </div>

          <div className="Contact-info">
            Horizontal Systems Limited <br />
            Room 1405, 14/F, 135 Bonham <br />
            Strand Trade Centre, <br />
            135 Bonham Strand, Sheung Wan <br />
            HONG KONG
          </div>
        </div>
      </Container>

      <Edge className="Edge-bottom" />
    </Container>
  )
}

export default Contact
