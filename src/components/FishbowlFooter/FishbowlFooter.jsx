import React from "react";
import { isDesktop } from 'react-device-detect';
import "./FishbowlFooter.scss";


export default function FishbowlFooter() {

  if (isDesktop) {
    //Desktop.
    return (
        <div className="fishbowl-footer">
            <img src={"./footpage_01.png"} alt=""/>
        </div>
    )
  } else {

    return (
      // Mobile.
      <div className="fishbowl-footer-mobile">
        <img src={"./footpage_02.png"} alt=""/>
      </div>
    );
  }

}