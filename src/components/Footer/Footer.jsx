import React from "react";
import { isDesktop } from "react-device-detect";
import "./Footer.scss";

export default function Footer() {

  const socialMedia = [
    {
      icon: "contact_mail.svg",
      desktop_icon: "contact_button_desktop.svg",
      text: "GET IN TOUCH!",
      ref: "mailto:fishbowlcity.team@gmail.com"
    },
    {
      icon: "i_twitter.svg",
      desktop_icon: "i_twitter_desktop.svg",
      text: "@team_fishbowl",
      ref: "https://twitter.com/team_fishbowl"
    },
    {
      icon: "i_tumblr.svg",
      desktop_icon: "i_tumblr_desktop.svg",
      text: "@fishbowl_team",
      ref: ""
    },
    {
      icon: "i_linkedin.svg",
      desktop_icon: "i_linkedin_desktop.svg",
      text: "Fishbowl Team",
      ref: "https://www.linkedin.com/company/fishbowl-team/"
    },
    {
      icon: "i_instagram.svg",
      desktop_icon: "i_instagram_desktop.svg",
      text: "@FishbowlTeam",
      ref: ""
    },
  ];
  if (isDesktop)
  {
    // Desktop.
    return (
        <div className="footer">
          <div className="social-media-container">
            {socialMedia.map((media) => {
              return (
                <a href={media.ref} target="_blank">
                  <div class="social-media-button">
                    <img src={media.desktop_icon} />
                  </div>
                </a>
              );
            })}
          </div>
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
                  <div className="icon">
                    <img src={media.icon} />
                  </div>
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