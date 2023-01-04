import React from "react";
import { isDesktop } from 'react-device-detect';
import "./ProjectVerticalSection.scss";


export default function ProjectVerticalSection(props) {
    const data = props.props;
  
    if (isDesktop) {
      //Desktop.
      return (
        <div className="project-vertical-section" id="home">
            <div className="section-info">
                <div className="info-title">
                    <h1>{data.title}</h1>
                </div>
                <div className="info-text">
                    <p>{data.text}</p>
                </div>
            </div>
            <div className="section-image">
                <img src={data.image} alt="" />
            </div>
        </div>
      )
    } else {

      return (
        // Mobile.
        <div className="project-vertical-section-mobile" id="home">

        </div>
      );
    }

  }