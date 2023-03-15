import React from "react";
import "./WaterContainer.scss";
import TeamMembers from "../TeamMembers/TeamMembers";
import Footer from "../Footer/Footer";

export default function WaterContainer() {

    return (
      <div className="water-container" id="water-container">
        <div className="under-water">
          <TeamMembers></TeamMembers>
        </div>
      </div>
    );
}
