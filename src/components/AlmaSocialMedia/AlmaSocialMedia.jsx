import React from "react";
import { isDesktop } from 'react-device-detect';
import "./AlmaSocialMedia.scss";


export default function AlmaSocialMedia() {

    if (isDesktop) {
      //Desktop.
      return (
        <div className="alma-social-media-container" id="home">
            <div style={{display: "none"}} className="row">
                <div className="info">
                    <div className="social-image">
                        <img src={"steam @4x.png"} alt=""/>
                    </div>
                    <div className="social-text">
                        WISHLIST ON STEAM !
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="info">
                    <div className="social-image">
                        <a rel="noreferrer" target="_blank" href="https://twitter.com/team_fishbowl">
                            <img src={"twitter@4x.png"} alt=""/>
                        </a>
                        {/* <img src={"steam @4x.png"} alt=""/>
                        <img src={"steam @4x.png"} alt=""/> */}
                    </div>
                    <div className="social-text">
                        FOLLOW ALMA !
                    </div>
                </div>
            </div>

        </div>
      )
    } else {

      return (
        // Mobile.
        <div className="alma-social-media-container-mobile" id="home">
        </div>
      );
    }

  }