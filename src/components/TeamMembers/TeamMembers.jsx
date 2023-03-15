import React from "react";
import { isDesktop } from "react-device-detect";
import "./TeamMembers.scss";

export default function TeamMembers() {

    const members = [
      {
        name: 'Cat C. Molina',
        role: 'Studio Lead, Producer & Designer',
        card: ``,
        img: 'pp_cat_n.png'
      },
      {
        name: 'Matías Gabler',
        role: 'Lead Programer, Assistant Producer',
        card: ``,
        img: 'pp_mati_n.png'
      },
      {
        name: '"Pan" Pezoa',
        role: 'Designer, Artist, Assistant Programer',
        card: ``,
          img: 'pp_pan_n.png'
      },
      {
        name: 'Abril Araneda',
        role: '3D, Mixed Media Artist, Designer',
        card: ``,
        img: 'pp_rat_n.png'
      },
    ]

    const meetTheTeam = {
      title: 'MEET THE TEAM !',
      p1: <>Fishbowl Team is a small but passionate team based in Santiago, 
      Chile. Founded by four besties trying to pursue their dream career. 
      Bound together by a love for world-building, interactive storytelling, 
      beautiful visual experiences and an insatiable thirst for fun!</>
    }

    const createMember =  (index, direction) => {
        return (
          <div className="team-member-container">
          <div className="filler"></div>
          <div className="member">
            <div className="member-image">
              <img src={members[index].img} alt=""/>
            </div>
            <div className="member-info">
              <div className="member-name">
                  <strong class="extra-bold">{members[index].name}</strong>
                </div>
                <div className="member-cardd">
                  cardd
                </div>
                <div className="member-role">
                  {members[index].role}
                </div>
                <div className="more-info more-info-left">
                  {/* <div>More me!</div> */}
                </div>
            </div>
          </div>
        </div>
        );
    }

    if (isDesktop)
    {
      return (
        <div className="team-members desktop" id="about">
          <div className="vertical-section guide">
            <div className="team-title text-big">
              {meetTheTeam.title}
            </div>
            <div className="about-text-container">
              <div className="about-text">
                <div className="p1">
                {meetTheTeam.p1}
                </div>
              </div>
            </div>
          </div>
          <div className="the-team guide">
              {createMember(0, 'right')}
              {createMember(1, 'right')}
              {createMember(2, 'left')}
              {createMember(3, 'left')}
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
                    <strong>{member.name}</strong>
                  </div>
                  <div className="member-cardd">
                    cardd
                  </div>
                  <div className="member-role">
                    {member.role}
                  </div>
                  <div className="more-info">
                    {/* <div>More me!</div> */}
                  </div>
                </div>
              );
            }))}
          </div>
        </div>
      );
    }
  }