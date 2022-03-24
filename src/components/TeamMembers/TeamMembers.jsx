import React from "react";
import { isDesktop } from "react-device-detect";
import "./TeamMembers.scss";

export default function TeamMembers() {

    const members = [
      {
        name: 'Cat C. Molina',
        role: 'Designer.',
        description: `Lorem ipsum sobre ti y la wea equisde aqui pones lo 
        que quieras en dos o tres lineas idk que mas decir sobre esto.`
      },
      {
        name: 'Matías Gabler',
        role: 'Programmer',
        description: `Lorem ipsum sobre ti y la wea equisde aqui pones lo 
        que quieras en dos o tres lineas idk que mas decir sobre esto.`
      },
      {
        name: 'Fran "Pan" Pezoa',
        role: 'Designer & Programmer',
        description: `Making games since preteen years, always thinking how to 
          make things more fun. Favourite game: Mother 3.`
      },
      {
        name: 'Abril Araneda',
        role: 'Designer',
        description: `Lorem ipsum sobre ti y la wea equisde aqui pones lo 
        que quieras en dos o tres lineas idk que mas decir sobre esto.`
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

    if (isDesktop)
    {
      return (
        <div className="team-members">
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
            <div className="row">
              <img src={'Fishfacingright_01.svg'} className="member"/>
              <img src={'Fishfacingright_01.svg'} className="member member-low"/>
            </div>
            <div className="row">
              <img src={'Fishfacingleft_01.svg'} className="member"/>
              <img src={'Fishfacingleft_01.svg'} className="member member-low"/>
            </div>
          </div>
        </div>
      );
    } else {
      // Mobile.
      return (
        <div className="team-members-mobile">
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
                    <img src="alma.svg"/>
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
                  <div class="more-info">
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