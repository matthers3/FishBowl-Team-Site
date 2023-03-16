import React from "react";
import "./WaterContainer.scss";
import TeamMembers from "../TeamMembers/TeamMembers";
import AboutUs from "../AboutUs/AboutUs";
import OurValues from "../OurValues/OurValues";
import AlmaFooter from "../AlmaFooter/AlmaFooter";
import FishbowlFooter from "../FishbowlFooter/FishbowlFooter";

export default function WaterContainer() {

    return (
      <div className="water-container" id="water-container">
        <div className="under-water">
          <TeamMembers></TeamMembers>
          <AboutUs></AboutUs>
          <OurValues></OurValues>
          <AlmaFooter></AlmaFooter>
          <FishbowlFooter></FishbowlFooter>
        </div>
      </div>
    );
}
