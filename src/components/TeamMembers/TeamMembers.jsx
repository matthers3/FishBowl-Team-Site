import React from "react";
import { isDesktop } from "react-device-detect";
import "./TeamMembers.scss";

export default function TeamMembers() {

    const members = [
      {
        name: 'Cat C. Molina',
        role: 'Designer.',
        description: `Lover of all things media. Illustrator, animator, and aspiring writter.
              Favorite game: Psychonauts (2005).`,
        img: 'Team_Cat_x4_circle.png'
      },
      {
        name: 'Matías Gabler',
        role: 'Programmer',
        description: `Passionate about data and software. Always looking for new challenges. 
          Favorite game: Castlevania: Order of Ecclesia (2008).`,
        img: 'Team_Matias_x4_circle.png'
      },
      {
        name: 'Fran "Pan" Pezoa',
        role: 'Designer & Programmer',
        description: `Making games since preteen years, always thinking how to 
          make things more fun. Favorite game: Mother 3 (2006).`,
          img: 'Team_Pan_x4_circle.png'
      },
      {
        name: 'Abril Araneda',
        role: 'Designer.',
        description: `Illustrator and animator. In love with experimental animation.
        Favorite game: Legend of the phoenix (2020).`,
        img: 'Team_Abril_x4_circle.png'
      },
    ]

    const meetTheTeam = {
      title: 'Meet the team',
      p1: `We are a small, independent team from Santiago, Chile. 
          Joined by our love for worldbuilding, interactive storytelling, 
          beautiful visual experiences and always looking to achieve fun first! 
          We make games that we wanna play and build worlds that 
          have something to say.`,
      p2: `We like meaningful stories and we’d like to make stories that are 
          meaningful to you too.`,
    }

    const createMember = (index, direction) => {
      if (direction == 'right')
      {
        return (
          <div className="team-member-container"
          style={{background: `url(./Fishfacingright_01.svg) no-repeat`}}>
          <div className="filler"></div>
          <div className="member member-right">
            <div className="member-info">
              <div className="member-name">
                  {members[index].name}
                </div>
                <div className="member-role">
                  {members[index].role}
                </div>
                <div className="member-description">
                  {members[index].description}
                </div>
                <div className="more-info more-info-left">
                  <div>More me!</div>
                </div>
            </div>
            <div className="member-image">
              <img src={members[index].img} />
            </div>
          </div>
        </div>
        );
      } else {
        return (
          <div className="team-member-container"
            style={{background: `url(./Fishfacingleft_01.svg) no-repeat`}}>
            <div className="member member-left">
              <div className="member-image">
                <img src={members[index].img} />
              </div>
              <div className="member-info">
                <div className="member-name">
                    {members[index].name}
                  </div>
                  <div className="member-role">
                    {members[index].role}
                  </div>
                  <div className="member-description">
                    {members[index].description}
                  </div>
                  <div className="more-info more-info-left">
                    <div>More me!</div>
                  </div>
              </div>
            </div>
            <div className="filler"></div>
          </div>
        );
      }
    }

    if (isDesktop)
    {
      return (
        <div className="team-members" id="about">
          <div className="team-title text-big">
            {meetTheTeam.title}
          </div>
          <div className="about-text-container">
            <div className="about-text">
              <div className="p1">
              {meetTheTeam.p1}
              </div>
              <div className="p2">
              {meetTheTeam.p2}
              </div>
            </div>
          </div>
          <div className="the-team">
            <div className="col">
              {createMember(0, 'right')}
              {createMember(2, 'right')}
            </div>
            <div className="col">
              {createMember(1, 'left')}
              {createMember(3, 'left')}
            </div>
          </div>
        </div>
      );
    } else {
      // Mobile.
      return (
        <div className="team-members-mobile" id="about">
          <div className="team-title-mobile text-big">
            {meetTheTeam.title}
          </div>
          <div className="about-text-container">
            <div className="about-text-mobile">
              <div className="p1">
              {meetTheTeam.p1}
              </div>
              <div className="p2">
              {meetTheTeam.p2}
              </div>
            </div>
          </div>
          <div className="the-team-mobile">
            {members.map((member => {
              return (
                <div className="team-member-mobile">
                  <div className="member-image">
                    <img src={member.img}/>
                  </div>
                  <div className="member-name">
                    {member.name}
                  </div>
                  <div className="member-role">
                    {member.role}
                  </div>
                  <div className="member-description">
                    {member.description}
                  </div>
                  <div className="more-info">
                    <div>More me!</div>
                  </div>
                </div>
              );
            }))}
          </div>
        </div>
      );
    }
  }