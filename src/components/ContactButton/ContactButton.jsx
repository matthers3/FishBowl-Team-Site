import React from "react";
import { isDesktop } from "react-device-detect";
import "./ContactButton.scss";
import { scrollTo } from "../../utils/scrollTo";

export default function ContactButton() {

    if (isDesktop)
    {
      // Desktop.
      return (
        <div className="contact-button-container" onClick={() => scrollTo({ id: "contact", duration: 50 })}>
          <div className="contact-button">
            <img src={'mail.svg'} className="mail-icon"/>
            <div className="text">LET'S TALK!</div>
          </div>
        </div>
      );
    } else {
      // Mobile.
      return (
        <div className="contact-button-container">
          <a href="mailto:fishbowlcity.team@gmail.com" target="_blank">
            <div className="contact-button-mobile">
              <div className="text">LET'S TALK!</div>
            </div>
          </a>
        </div>
      );
    }
  }