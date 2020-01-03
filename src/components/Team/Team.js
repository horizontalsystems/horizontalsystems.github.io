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
        We are a team of free-minded engineers sepcializing on building censorship-resistant services.
      </div>

      <ul className="team-members">
        <li className="team-member">
          <img alt="Arslan" src="/images/team/Arslan.png" /> Ars
        </li>
        <li className="team-member">
          <img alt="Nurkaly" src="/images/team/Nur.png" /> Nurkaly
        </li>
        <li className="team-member">
          <img alt="Rafael" src="/images/team/Raf.png" /> Rafael
        </li>
        <li className="team-member">
          <img alt="Aibek" src="/images/team/ibk.png" /> iBek
        </li>
        <li className="team-member">
          <img alt="Kerim" src="/images/team/ker.png" /> Kerim
        </li>
        <li className="team-member">
          <img alt="Bakyt" src="/images/team/Bak.png" /> Bakyt
        </li>
        <li className="team-member">
          <img alt="Maxim" src="/images/team/Max.png" /> Max
        </li>
        <li className="team-member">
          <img alt="Ermat" src="/images/team/Erm.png" /> Ermat
        </li>
        <li className="team-member">
          <img alt="Anton" src="/images/team/Ant.png" /> Anton
        </li>
        <li className="team-member">
          <img alt="Chyngyz" src="/images/team/Chyn.png" /> Chyngyz
        </li>
        <li className="team-member">
          <img alt="Kanat" src="/images/team/Kana.png" /> Kanat
        </li>
        <li className="team-member">
          <img alt="Talgat" src="/images/team/Talg.png" /> Talgat
        </li>
        <li className="team-member">
          <img alt="Esen" src="/images/team/Esen.png" /> Esen
        </li>
        <li className="team-member">
          <img alt="Diana" src="/images/team/Diana.png" /> Diana
        </li>
        <li className="team-member">
          <img alt="Tallgat" src="/images/team/Tall.png" /> Tallgat
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
