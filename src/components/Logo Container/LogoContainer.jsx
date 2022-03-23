import React from "react";
import { isDesktop } from 'react-device-detect';
import "./LogoContainer.scss";


export default function LogoContainer() {

    if (isDesktop) {
      //Desktop.
      return (
        <div className="logo-container">
          <img src={'Logo_Fishbowl_SVG.svg'} className="logo"/>
        </div>
      )
    } else {

      return (
        // Mobile.
        <div className="logo-container-mobile">
          <img src={'Logo_Fishbowl_SVG.svg'} className="logo"/>
        </div>
      );
    }

  }