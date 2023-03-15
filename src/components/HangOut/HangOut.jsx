import React from "react";
import { isDesktop } from 'react-device-detect';
import "./HangOut.scss";


export default function HangOut() {
    const data = {
        title: <>HANG OUT !</>,
        text: <>
            Learn all about the stupid horrors of the future with the people closest to Alma. Choose between hanging out with <strong className="isaac">Isaac</strong>, 
            do some cyber-vandalism with <strong className="emi">Emilia</strong> or become the best underground robot racer with <strong className="marina">Marina</strong>.
        </>,
        text2: <strong>Everyone has a double life in Fishbowl City!</strong>,
        image: "./main_trhee_black_fade_out.png",
        firstFrame: "./main_trhee_black_fade_out.png",
    };
  
    if (isDesktop) {
      //Desktop.
      return (
        <div className="project-horizontal-section guide desktop" id="home">
            <div className="section-image">
                <img src={data.image} alt="" />
            </div>
            <div className="section-info source">
                <div className="info-title">
                    <h1 className="bold info2">{data.title}</h1>
                </div>
                <div className="info-text source">
                    <p>{data.text}</p>
                    <p>{data.text2}</p>
                </div>
            </div>
        </div>
      )
    } else {

      return (
        // Mobile.
        <div className="mobile-hangout" id="home">
            <div className="section-image"
              style={{backgroundImage: `url(./${data.firstFrame})`,
              backgroundSize: "contain"}}>
                <img src={data.image} alt="" />
            </div>
                <div className="info-title">
                    <h1>{data.title}</h1>
                </div>
                <div className="info-text source">
                        <p>{data.text}</p>
                        <p>{data.text2}</p>
                </div>
        </div>
      );
    }

  }