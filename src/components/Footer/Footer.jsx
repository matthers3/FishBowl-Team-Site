import React from "react";
import { isDesktop } from "react-device-detect";
import "./Footer.scss";

export default function Footer() {

  const socialMedia = [
    {
      icon: "contact_mail.svg",
      text: "GET IN TOUCH!",
      ref: "mailto:fishbowlcity.team@gmail.com"
    },
    {
      icon: "twitter.svg",
      text: "@team_fishbowl",
      ref: "https://twitter.com/team_fishbowl"
    },
    {
      icon: "tumblr.svg",
      text: "@fishbowl_team",
      ref: ""
    },
    {
      icon: "linkedin.svg",
      text: "Fishbowl Team",
      ref: "https://www.linkedin.com/company/fishbowl-team/"
    },
    {
      icon: "instagram.svg",
      text: "@FishbowlTeam",
      ref: ""
    },
  ];
  if (isDesktop)
  {
    // Desktop.
    return (
        <div className="footer">
          <img src="tenticles.svg" />
        </div>
    )
  } else {
    // Mobile.
    return (
      <div className="footer-mobile"
        style={{background: `url(tenticles_mobile.svg) bottom center no-repeat`}}>
        <div className="social-media-container">
          {socialMedia.map((media) => {
            return (
              <a href={media.ref} target="_blank">
                <div className="social-media-button">
                  {/* <div className="icon">
                    <img src={media.icon} />
                  </div> */}
                  <div className="text">
                    {media.text}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}