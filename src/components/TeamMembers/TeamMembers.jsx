import React from "react";
import "./TeamMembers.scss";

export default function TeamMembers() {

    return (
      <div className="team-members">
        <div className="team-title text-big">
          Meet the Team
        </div>
        <div className="about-text">
          <div className="p1">
          We are a small, independent team from Santiago, Chile.<br/>
          Joined by our love for worldbuilding, interactive storytelling, beautiful visual <br/>
          experiences and always looking to achieve fun first! We make games that we<br/>
          wanna play and build worlds that have something to say.
          </div>
          <div className="p2">
          We like meaningful stories and we’d like to make stories that are meaningful<br/>to you too. 
          </div>
        </div>
        <img src={'fish-resume.svg'} className="member"/>
      </div>
    );
  }