import React from "react";
import { isDesktop } from 'react-device-detect';
import "./ProjectVerticalSection.scss";


export default function ProjectVerticalSection(props) {
    const data = props.props;
  
    if (isDesktop) {
      //Desktop.
      return (
        <div className="project-vertical-section desktop" id="home">
            <div className="section-image">
                <img src={data.image} alt="" />
            </div>
            <div className="section-info source">
                <div className="info-title">
                    <h1 className="bold">{data.title}</h1>
                </div>
                <div className="info-text source">
                    <p>{data.text}</p>
                </div>
            </div>
        </div>
      )
    } else {

      return (
        // Mobile.
        <div className="mobile-project-vertical-section" id="home">
            <div className="section-image"
              style={{backgroundImage: `url(./${data.firstFrame})`,
              backgroundSize: "contain"}}>
                <img src={data.image} alt="" />
            </div>
              <div className="info-title">
                  <h1>{data.title}</h1>
              </div>
            <div className="info-text">
                <p>{data.text}</p>
            </div>
        </div>
      );
    }

  }