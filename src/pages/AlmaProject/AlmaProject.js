import './AlmaProject.scss';
import React from 'react';
import AlmaBanner from '../../components/AlmaBanner/AlmaBanner';
import AlmaSocialMedia from '../../components/AlmaSocialMedia/AlmaSocialMedia';
import ProjectAbout from '../../components/ProjectAbout/ProjectAbout';
import ProjectVerticalSection from '../../components/ProjectVerticalSection/ProjectVerticalSection';
import ProjectImageDescription from '../../components/ProjectImageDescription/ProjectImageDescription';
import CharacterSlider from '../../components/CharacterSlider/CharacterSlider';

const sectionData = [
    {
        title: "MINIGAMES",
        text: "Scavenge to find robot parts and other lost items. Fish to collect all the weird ocean dwellers. Help out your older sister to become the best robot racer in the city. There is always something to do in Fishbowl City.",
        image: "./MINIGAMES-ALMA_minigames.gif"
    },
    {
      title: "EXPLORE",
      text: "Fishbowl City is a compact open world, where the future looks very different depending on your social status. Explore the four different zones in Alma's fully open world!",
      image: "./EXPLORE-Alma_explore_01.gif"
    },
    {
      title: "CHOOSE",
      text: "Alma can pursue all story-lines at the same time, and she can decide to end the game whenever she reaches the end of any Route. This story different paths and endings can be fully explored in a single playthrough before making a final decision.",
      image: "./CHOOSE_Alma_px.gif"
    }
]

function AlmaProject() {

  return (
    <div className="AlmaProject">
      <div className="AlmaProject-Container">
            <AlmaBanner></AlmaBanner>
            <AlmaSocialMedia></AlmaSocialMedia>
            <ProjectAbout></ProjectAbout>
            <ProjectVerticalSection props={sectionData[0]}></ProjectVerticalSection>
            <ProjectVerticalSection props={sectionData[1]}></ProjectVerticalSection>
            <ProjectVerticalSection props={sectionData[2]}></ProjectVerticalSection>
            <CharacterSlider></CharacterSlider>
            <ProjectImageDescription></ProjectImageDescription>
      </div>
    </div>
  );
}

export default AlmaProject;
