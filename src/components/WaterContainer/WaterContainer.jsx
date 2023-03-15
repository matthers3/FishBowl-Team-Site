import React from "react";
import "./WaterContainer.scss";
import TeamMembers from "../TeamMembers/TeamMembers";
import AboutUs from "../AboutUs/AboutUs";

export default function WaterContainer() {

    return (
      <div className="water-container" id="water-container">
        <div className="under-water">
          <TeamMembers></TeamMembers>
          <AboutUs></AboutUs>
        </div>
      </div>
    );
}
