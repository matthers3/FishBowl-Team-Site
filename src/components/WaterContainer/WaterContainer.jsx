import React from "react";
import "./WaterContainer.scss";
import TeamMembers from "../TeamMembers/TeamMembers";
import Footer from "../Footer/Footer";

export default function WaterContainer() {

    return (
      <div className="water-container">
        <div className="water-top">
            <img src={'wave_tops.svg'}/>
        </div>
        <div className="under-water">
          <TeamMembers></TeamMembers>
          <Footer></Footer>
        </div>
      </div>
    );
}
