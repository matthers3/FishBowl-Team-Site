import React from "react";
import "./WaterContainer.scss";
import TeamMembers from "../TeamMembers/TeamMembers";

export default function WaterContainer() {

    return (
      <div className="water-container">
        <div class="water-top">
            <img src={'wave_tops.svg'}/>
        </div>
        <div className="under-water">
          <TeamMembers></TeamMembers>
        </div>
      </div>
    );
}
