import './AlmaProject.scss';
import React from 'react';
import AlmaBanner from '../../components/AlmaBanner/AlmaBanner';
import AlmaSocialMedia from '../../components/AlmaSocialMedia/AlmaSocialMedia';
import ProjectAbout from '../../components/ProjectAbout/ProjectAbout';

function AlmaProject() {

  return (
    <div className="AlmaProject">
      <div className="AlmaProject-Container">
            <AlmaBanner></AlmaBanner>
            <AlmaSocialMedia></AlmaSocialMedia>
            <ProjectAbout></ProjectAbout>
      </div>
    </div>
  );
}

export default AlmaProject;
