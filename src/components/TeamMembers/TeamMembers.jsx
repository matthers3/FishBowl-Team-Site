import React from "react";
import { isDesktop } from "react-device-detect";
import "./TeamMembers.scss";

export default function TeamMembers() {

    const members = [
      {
        name: '',
        role: '',
        description: ''
      },
      {
        name: '',
        role: '',
        description: ''
      },
      {
        name: '',
        role: '',
        description: ''
      },
      {
        name: '',
        role: '',
        description: ''
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

          </div>
        </div>
      );
    }
  }