import React from "react";
import { isDesktop } from 'react-device-detect';
import "./AlmaBanner.scss";


export default function AlmaBanner() {

    if (isDesktop) {
      //Desktop.
      return (
        <div className="alma-banner" id="home">
            <div className="bannerContainer" style={{backgroundImage: `url(./AlmaBanner.gif)`}}>
                <img className="imageSizer" alt="" src={"./AlmaBannerSizer.png"}></img>
            </div>
            <img className="alma-title" alt="" src={"./Logo_WIP.png"} />
        </div>
      )
    } else {

      return (
        // Mobile.
        <div className="mobile-alma-banner" id="home">
            <div className="bannerContainer" style={{backgroundImage: `url(./AlmaBanner.gif)`}}>
                <img className="imageSizer" alt="" src={"./AlmaBannerSizer.png"}></img>
            </div>
            <img className="alma-title" alt="" src={"./Logo_WIP.png"} />
        </div>
      );
    }

  }