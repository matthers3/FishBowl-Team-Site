import React from "react";
import { isDesktop } from 'react-device-detect';
import "./VerticalSocialMedia.scss";


export default function VerticalSocialMedia() {

  const socialMedia = [
    {
      icon: "contact_mail_dark.svg",
      desktop_icon: "contact_button_desktop.svg",
      text: "GET IN TOUCH!",
      ref: "mailto:fishbowlcity.team@gmail.com"
    },
    {
      icon: "i_twitter_dark.svg",
      desktop_icon: "i_twitter_desktop.svg",
      text: "@team_fishbowl",
      ref: "https://twitter.com/team_fishbowl"
    },
    // {
    //   icon: "i_tumblr.svg",
    //   desktop_icon: "i_tumblr_desktop.svg",
    //   text: "@fishbowl_team",
    //   ref: ""
    // },
    {
      icon: "i_linkedin_dark.svg",
      desktop_icon: "i_linkedin_desktop.svg",
      text: "Fishbowl Team",
      ref: "https://www.linkedin.com/company/fishbowl-team/"
    },
    // {
    //   icon: "i_instagram.svg",
    //   desktop_icon: "i_instagram_desktop.svg",
    //   text: "@FishbowlTeam",
    //   ref: ""
    // },
  ];

  if (isDesktop) {
    //Desktop.
    return (
      <div className="vertical-social" id="home">
        <div className="vertical-social-buttons">
          <div className="social-media">
            <div className="social-media-container">
              {socialMedia.map((media) => {
                return (
                  <a href={media.ref} target="_blank" rel="noreferrer">
                    <div className="social-media-button">
                      <img src={media.desktop_icon} alt=""/>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  } else {

    return (
      // Mobile.
      <div className="vertical-social-mobile" id="home">
        <div className="vertical-social-buttons">
          <div className="social-media">
            <div className="social-media-container">
              {socialMedia.map((media) => {
                return (
                  <a href={media.ref} target="_blank" rel="noreferrer">
                    <div className="social-media-button">
                      <img src={media.desktop_icon} alt=""/>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

}