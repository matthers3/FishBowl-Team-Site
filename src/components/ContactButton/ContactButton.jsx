import React from "react";
import "./ContactButton.scss";

export default function ContactButton() {

    return (
      <a href="/">
        <div className="contact-button">
          <img src={'mail.svg'} className="mail-icon"/>
          <div className="text">LET'S TALK!</div>
        </div>
      </a>
    );
  }