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
          <img alt="Arslan" src="/images/team/Arslan.png" /> Arslan Esen
        </li>
        <li className="team-member">
          <img alt="Nurkaly" src="/images/team/Nurkaly.png" /> Nurkaly
        </li>
        <li className="team-member">
          <img alt="Rafael" src="/images/team/Rafael.png" /> Rafael M
        </li>
        <li className="team-member">
          <img alt="Aibek" src="/images/team/Aibek.png" /> iBek Esengulov
        </li>
        <li className="team-member">
          <img alt="Kerim" src="/images/team/kerim.png" /> Kerim Kaparov
        </li>
        <li className="team-member">
          <img alt="Bakyt" src="/images/team/Bakyt.png" /> Bakyt
        </li>
        <li className="team-member">
          <img alt="Maxim" src="/images/team/Maxim.png" /> Maxim N
        </li>
        <li className="team-member">
          <img alt="Ermat" src="/images/team/Ermat.png" /> Ermat
        </li>
        <li className="team-member">
          <img alt="Anton" src="/images/team/Anton.png" /> Anton
        </li>
        <li className="team-member">
          <img alt="Chyngyz" src="/images/team/Chyngyz.png" /> Cyngyz
        </li>
        <li className="team-member">
          <img alt="Kanat" src="/images/team/Kanat.png" /> Kanat
        </li>
        <li className="team-member">
          <img alt="Talgat" src="/images/team/Talgat.png" /> Talgat
        </li>
        <li className="team-member">
          <img alt="Esen" src="/images/team/Esen.png" /> Esen
        </li>
        <li className="team-member">
          <img alt="Diana" src="/images/team/Diana.png" /> Diana
        </li>
        <li className="team-member">
          <img alt="Tallgat" src="/images/team/Tallgat.png" /> Tallgat
        </li>
      </ul>

      <div className="grid-gallery">
        <Gallery />
      </div>

      <div className="github-link">
        <ButtonNav img="/images/github.png" text="Github" />
      </div>
    </Container>
  )
}

export default Team
