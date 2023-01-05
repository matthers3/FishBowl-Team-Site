import React from "react";
import { isDesktop } from 'react-device-detect';
import "./AlmaFooter.scss";


export default function AlmaFooter() {

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
      <div className="project-footer" id="home">
        <div className="project-footer-image">
          <img alt="" src={"./trashdog_idlex4.gif"} />
        </div>
        <div className="project-footer-buttons">
          <div className="social-media">
            <div className="social-media-container">
              {socialMedia.map((media) => {
                return (
                  <a href={media.ref} target="_blank">
                    <div className="social-media-button">
                      <img src={media.desktop_icon} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="logo-button">
            <a href={"/"}><img alt="" src={"./Logo_transparent.png"}/></a>
          </div>
        </div>
      </div>
    )
  } else {

    return (
      // Mobile.
      <div className="project-footer-mobile" id="contact">
        <div className="project-footer-image">
          <img alt="" src={"./trashdog_idlex4.gif"} />
        </div>
        
        <div className="social-media-container">
          {socialMedia.map((media) => {
            return (
              <a rel="noreferrer" key={media.ref} href={media.ref} target="_blank">
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

        <div className="logo-button">
            <a href={"/"}><img alt="" src={"./Logo_transparent.png"}/></a>
        </div>
      </div>
    );
  }

}