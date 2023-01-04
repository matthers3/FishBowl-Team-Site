import React from "react";
import { isDesktop } from 'react-device-detect';
import "./ProjectImageDescription.scss";


export default function ProjectImageDescription() {

    if (isDesktop) {
      //Desktop.
      return (
        <div className="project-image-description" id="home">
          <h1>ON THE MOST ANTI-COOLEST ISLAND</h1>
          <div className="project-image-container">
            <img src={"./fishbowlCityEncapsuladaConceptArt.png"} alt="" />
          </div>
          <p>The “Union for Progress” City, know to it's people as “Fishbowl City” due to it's on-the-nose shape and concept. Is a man-made island perfectly suspended above sea level. All thanks to its “L.E.G.S.” a vast, complex, interconnected system of underwater tubes that keep the city-island afloat. Capable of growing taller in order to keep up to the rising sea levels.</p>
          <h4>“UP city: Why fix the problem when you can rise above it?”</h4>
        </div>
      )
    } else {

      return (
        // Mobile.
        <div className="project-image-description-mobile" id="home">

        </div>
      );
    }

  }