import React from "react";
import { isDesktop } from 'react-device-detect';
import "./ProjectAbout.scss";


export default function ProjectAbout() {

    if (isDesktop) {
      //Desktop.
      return (
        <div className="project-about" id="home">
          <h1>LATIN AMERICAN COMING OF AGE</h1>
          <p>Alma, the naive 18 year old high school graduate, needs to find meaning in her directionless life in this comedy-drama about Latin American girlhood.</p>
          <p>Explore “Fishbowl City” and discover all it's secrets, and meet the local weirdos in this slice-of-life, sci-fi, narrative adventure.</p>
        </div>
      )
    } else {

      return (
        // Mobile.
        <div className="alma-banner-mobile" id="home">

        </div>
      );
    }

  }