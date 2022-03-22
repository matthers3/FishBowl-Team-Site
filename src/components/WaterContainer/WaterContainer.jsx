import React from "react";
import "./WaterContainer.scss";
import LogoContainer from '../Logo Container/LogoContainer';

export default function WaterContainer() {

    return (
      <div className="water-container">
        <div class="water-top">
            <img src={'wave_tops.svg'}/>
        </div>
        <div className="under-water">
        </div>
      </div>
    );
}
