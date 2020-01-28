import React from 'react'
import Container from '../Container/Container'
import Gallery from '../Gallery/Gallery'
import ButtonNav from '../ButtonNav/ButtonNav'
import Icon from '../Icon/Icon'

import './Team.scss'
import { Link } from 'react-router-dom'

function Team() {
  return (
    <Container>
      <div className="team-header">
        Horizontal Systems Team <Link to="/" className="team-close"><Icon name="close" /></Link>
      </div>
      <div className="team-info">
        We are a team of like minded people who believe in a fair future. Ans we build serverless applications around
        the idea of private wealth and privacy.
      </div>

      <ul className="team-members">
        <li className="team-member">
          <a href="https://github.com/btae" target="_blank" rel="noopener noreferrer">
            <img alt="Arslan" src="/images/team/Arslan.png" /> btae
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/nk-the-crazy" target="_blank" rel="noopener noreferrer">
            <img alt="Nurkaly" src="/images/team/Nur.png" /> nk-the-crazy
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/rafaelekol" target="_blank" rel="noopener noreferrer">
            <img alt="Rafael" src="/images/team/Raf.png" /> rafaelekol
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/esengulov" target="_blank" rel="noopener noreferrer">
            <img alt="Aibek" src="/images/team/ibk.png" /> esengulov
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/uber9" target="_blank" rel="noopener noreferrer">
            <img alt="Kerim" src="/images/team/ker.png" /> uber9
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/abdrasulov" target="_blank" rel="noopener noreferrer">
            <img alt="Bakyt" src="/images/team/Bak.png" /> abdrasulov
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/mNizhurin" target="_blank" rel="noopener noreferrer">
            <img alt="Maxim" src="/images/team/Max.png" /> mNizhurin
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/ealymbaev" target="_blank" rel="noopener noreferrer">
            <img alt="Ermat" src="/images/team/Erm.png" /> ealymbaev
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/ant013" target="_blank" rel="noopener noreferrer">
            <img alt="Anton" src="/images/team/Ant.png" /> ant013
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/omurovch" target="_blank" rel="noopener noreferrer">
            <img alt="Chyngyz" src="/images/team/Chyn.png" /> omurovch
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/kansalt" target="_blank" rel="noopener noreferrer">
            <img alt="Kanat" src="/images/team/Kana.png" /> kansalt
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/tmedetbekov" target="_blank" rel="noopener noreferrer">
            <img alt="Talgat" src="/images/team/Talg.png" /> tmedetbekov
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/esen" target="_blank" rel="noopener noreferrer">
            <img alt="Esen" src="/images/team/Esen.png" /> esen
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/jacksonchung" target="_blank" rel="noopener noreferrer">
            <img alt="Esen" src="/images/team/jackson.png" /> jacksonchung
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/Dianaaiym" target="_blank" rel="noopener noreferrer">
            <img alt="Diana" src="/images/team/Diana.png" /> Dianaaiym
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/TalgatNurdinov" target="_blank" rel="noopener noreferrer">
            <img alt="Tallgat" src="/images/team/Tall.png" /> TalgatNurdinov
          </a>
        </li>
      </ul>

      <div className="grid-gallery">
        <Gallery />
      </div>

      <div className="github-link">
        <a href="https://github.com/horizontalsystems" target="_blank" rel="noopener noreferrer">
          <ButtonNav icon="github" text="Github" />
        </a>
      </div>
    </Container>
  )
}

export default Team
