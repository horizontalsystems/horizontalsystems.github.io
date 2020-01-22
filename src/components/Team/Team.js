import React from 'react'
import Container from '../Container/Container'
import Gallery from '../Gallery/Gallery'
import ButtonNav from '../ButtonNav/ButtonNav'

import './Team.scss'

function Team() {
  return (
    <Container>
      <div className="team-header">
        Horizontal Systems Team
      </div>
      <div className="team-info">
        We are a team of like minded people who believe in a fair future. Ans we build serverless applications around
        the idea of private wealth and privacy.
      </div>

      <ul className="team-members">
        <li className="team-member">
          <a href="https://github.com/btae" target="_blank" rel="noopener noreferrer">
            <img alt="Arslan" src="/images/team/Arslan.png" /> Ars
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/nk-the-crazy" target="_blank" rel="noopener noreferrer">
            <img alt="Nurkaly" src="/images/team/Nur.png" /> Nurkaly
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/rafaelekol" target="_blank" rel="noopener noreferrer">
            <img alt="Rafael" src="/images/team/Raf.png" /> Rafael
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/esengulov" target="_blank" rel="noopener noreferrer">
            <img alt="Aibek" src="/images/team/ibk.png" /> iBek
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/uber9" target="_blank" rel="noopener noreferrer">
            <img alt="Kerim" src="/images/team/ker.png" /> Kerim
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/abdrasulov" target="_blank" rel="noopener noreferrer">
            <img alt="Bakyt" src="/images/team/Bak.png" /> Bakyt
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/mNizhurin" target="_blank" rel="noopener noreferrer">
            <img alt="Maxim" src="/images/team/Max.png" /> mNizhurin
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/ealymbaev" target="_blank" rel="noopener noreferrer">
            <img alt="Ermat" src="/images/team/Erm.png" /> Ermat
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/ant013" target="_blank" rel="noopener noreferrer">
            <img alt="Anton" src="/images/team/Ant.png" /> Anton
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/omurovch" target="_blank" rel="noopener noreferrer">
            <img alt="Chyngyz" src="/images/team/Chyn.png" /> Chyngyz
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/kansalt" target="_blank" rel="noopener noreferrer">
            <img alt="Kanat" src="/images/team/Kana.png" /> kansalt
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/tmedetbekov" target="_blank" rel="noopener noreferrer">
            <img alt="Talgat" src="/images/team/Talg.png" /> Talgat
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/esen" target="_blank" rel="noopener noreferrer">
            <img alt="Esen" src="/images/team/Esen.png" /> Esen
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/jacksonchung" target="_blank" rel="noopener noreferrer">
            <img alt="Esen" src="/images/team/jackson.png" /> jacksonchung
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/Dianaaiym" target="_blank" rel="noopener noreferrer">
            <img alt="Diana" src="/images/team/Diana.png" /> Diana
          </a>
        </li>
        <li className="team-member">
          <a href="https://github.com/TalgatNurdinov" target="_blank" rel="noopener noreferrer">
            <img alt="Tallgat" src="/images/team/Tall.png" /> Tallgat
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
