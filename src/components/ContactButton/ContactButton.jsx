import React from "react";
import { isDesktop } from "react-device-detect";
import "./ContactButton.scss";

export default function ContactButton() {

    if (isDesktop)
    {
      // Desktop.
      return (
        <div className="contact-button-container">
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
          <div className="contact-button-mobile">
            <div className="text">LET'S TALK!</div>
          </div>
        </div>
      );
    }
  }