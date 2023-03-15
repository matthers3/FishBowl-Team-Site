import './Features.scss';
import React from 'react';
import ProjectAbout from '../../components/ProjectAbout/ProjectAbout';
import ProjectVerticalSection from '../../components/ProjectVerticalSection/ProjectVerticalSection';
import { isDesktop } from 'react-device-detect';

const sectionData = [
    {
        title: "FIND THE PIECES",
        text: "Explore your city, scavenge and do quests!",
        image: "./scavenge.gif",
        firstFrame: "./MINIGAMES-ALMA_minigames.png",
    },
    {
      title: "BUILD YOUR BOT",
      text: "Who knew that a racebot was just a Hat, a Gut and a Butt?",
      image: "./bot_build.gif",
      firstFrame: "",
    },
    {
      title: "RACE IT TO VICTORY!",
      text: "In heated, 4-v-4,last-one-standing style races.",
      image: "./CHOOSE_Alma_px.gif",
      firstFrame: "./CHOOSE_Alma_px.png",
    }
]

const section2Data = [
  {
      title: "CYBER-CRIMES !",
      text: "Discover the secret cyber-vandalism scene.",
      image: "./CYBERVANDALIZE.gif",
      firstFrame: "./MINIGAMES-ALMA_minigames.png",
  },
  {
    title: "CHOOSE YOUR FUTURE",
    text: "Everyone seems to have an idea in theirs heads of who you should become, can you please them all?",
    image: "./CHOOSE_Alma_px.gif",
    firstFrame: "./CHOOSE_Alma_px.png",
  }
]

const text1 = "So you want to be a bot racer?";
const text2 = "MORE FEATURES";

function Features() {
    if (isDesktop)
    {
        return (
            <div className="container-desktop">
                <h1 className="info1 source">{text1}</h1>
                <div className="row-container guide">
                    <ProjectVerticalSection props={sectionData[0]}></ProjectVerticalSection>
                    <ProjectVerticalSection props={sectionData[1]}></ProjectVerticalSection>
                    <ProjectVerticalSection props={sectionData[2]}></ProjectVerticalSection>
                </div>
    
                <h1 className="info2 source">{text2}</h1>
                <div className="row-container guide">
                    <ProjectVerticalSection props={section2Data[0]}></ProjectVerticalSection>
                    <ProjectVerticalSection props={section2Data[1]}></ProjectVerticalSection>
                </div>
            </div>
        );
    }
    else
    {
        return (
            <div className="container-mobile">
                <h1 className="info1 source">{text1}</h1>
                <ProjectVerticalSection props={sectionData[0]}></ProjectVerticalSection>
                <ProjectVerticalSection props={sectionData[1]}></ProjectVerticalSection>
                <ProjectVerticalSection props={sectionData[2]}></ProjectVerticalSection>
                <h1 className="info2 source">{text2}</h1>
                <ProjectVerticalSection props={section2Data[0]}></ProjectVerticalSection>
                <ProjectVerticalSection props={section2Data[1]}></ProjectVerticalSection>
            </div>
        ); 
    }
}

export default Features;
