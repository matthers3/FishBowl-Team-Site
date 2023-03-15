import './AlmaProject.scss';
import React from 'react';
import AlmaBanner from '../../components/AlmaBanner/AlmaBanner';
import AlmaSocialMedia from '../../components/AlmaSocialMedia/AlmaSocialMedia';
import ProjectAbout from '../../components/ProjectAbout/ProjectAbout';
import ProjectVerticalSection from '../../components/ProjectVerticalSection/ProjectVerticalSection';
import ProjectImageDescription from '../../components/ProjectImageDescription/ProjectImageDescription';
import CharacterSlider from '../../components/CharacterSlider/CharacterSlider';
import Features from '../../components/Features/Features';
import HangOut from '../../components/HangOut/HangOut';
import AlmaFooter from '../../components/AlmaFooter/AlmaFooter';

function AlmaProject() {

  return (
    <div className="AlmaProject">
      <div className="AlmaProject-Container">
            <AlmaBanner></AlmaBanner>
            <ProjectAbout></ProjectAbout>
            <Features></Features>
            <HangOut></HangOut>
            <AlmaFooter></AlmaFooter>
      </div>
    </div>
  );
}

export default AlmaProject;
