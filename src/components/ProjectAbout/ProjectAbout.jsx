import React from "react";
import { isDesktop } from 'react-device-detect';
import "./ProjectAbout.scss";


export default function ProjectAbout() {

    const title = <strong>FISHBOWL CITY: RACEBOTS</strong>;
    const paragraph = <>
    A <strong className="cyber-blue">Story-driven</strong><br/>
            <strong className="pink">Racing Game</strong> about <br/>
            <strong className="extra-bold">Latin American Girlhood !</strong>
            </>;

    const paragraph2 = <>After finding her sister is involved in the secret underground robot racing scene, the naive, impulsive but kindhearted Alma Velazco will be plunged into the world of adulthood in this coming-of-age set in 2500s South America.</>;
    const paragraph3 = <>Discover the secrets that “Fishbowl City” hold and help Alma answer the question on everyone’s mind: <br/>“What kind of adult she’ll become?”</> ;

    if (isDesktop) {
      //Desktop.
      return (
        <div className="project-about source desktop guide" id="home">
          <h1>{title}</h1>
          <p>{paragraph}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
          <div className="full-width-image">
            <img src={"./bots_enemies.gif"} alt=""/>
          </div>
        </div>
      )
    } else {

      return (
        // Mobile.
        <div className="mobile-project-about source mobile guide" id="home">
          <h1>{title}</h1>
          <p>{paragraph}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
          <div className="full-width-image">
            <img src={"./bots_enemies.gif"} alt=""/>
          </div>
        </div>
      );
    }

  }