import React from "react";
import { isDesktop } from 'react-device-detect';
import VerticalSocialMedia from '../VerticalSocialMedia/VerticalSocialMedia';
import "./LogoContainer.scss";


export default function LogoContainer() {

    if (isDesktop) {
      //Desktop.
      return (
        <div className="logo-container" id="home">
          <img src={'animation_logo_white_text_once1.gif'} className="logo"/>
          <VerticalSocialMedia></VerticalSocialMedia>
        </div>
      )
    } else {

      return (
        // Mobile.
        <div className="logo-container-mobile" id="home">
          <img src={'animation_logo_white_text_once1.gif'} className="logo"/>
          <VerticalSocialMedia></VerticalSocialMedia>
        </div>
      );
    }

  }