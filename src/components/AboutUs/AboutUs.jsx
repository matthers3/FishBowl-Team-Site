import React from "react";
import { isDesktop } from "react-device-detect";
import "./AboutUs.scss";

export default function AboutUs() {

    const aboutText = {
      title: <strong className="extra-bold">ABOUT US</strong>,
      p11: <>Fishbowl Team is a passion project, founded by a group of friends, 
      looking to uplift and bring financial stability to other creative people in a 
      country that often belittles and minimizes artistic work and creative processes. 
      We work with small teams, from a close proximity between each other and horizontal 
      communication because we love it that way. We are fiercely independent and we wish 
      to create games that resonate with people that (like us!) love the indie space and 
      community.
      </>,
      p12: <>In the topic of games… when we start working on a game concept, 
      we like to keep two things in mind. We make…</>,
      title2: <strong className="marina medium">“Small but deep worlds”'</strong>,
      p2: <>When it comes to creating game spaces, we believe in quality over quantity. 
      We are unafraid to tackle what we perceive to be real life world problems and 
      criticize status quo.</>,
      title3: <strong className="emi medium">“The games we want to play”</strong>,
      p3: <>We are consumers of indie media. As a team, have a vast and diverse library of 
      media interests (games, books, series and movies, music even!) outside of the gaming 
      space that inspire our understanding of what digital media can accomplish. That means
       we do not feel limited inside our interests, the genres we want to tackle, or the 
       themes we will explore. 
      We’re currently obsessed with Sci-fi, in the future? who knows.</>,
    }

    if (isDesktop)
    {
      return (
        <div className="about-us desktop guide">
            <div className="about-us-cel">
                <div className="team-title text-big">
                {aboutText.title}
                </div>
                <div className="about-us-text text">
                <div>
                    <div className="p1">
                    {aboutText.p11}
                    <br/><br/><br/>
                    {aboutText.p12}
                    </div>
                </div>
                </div>
            </div>
            <div className="about-us-cel">
                {aboutText.title2}
                <br/><br/>
                <div className="about-us-text text">
                    {aboutText.p2}
                </div>
                <br/><br/><br/><br/>
                {aboutText.title3}
                <br/><br/>
                <div className="about-us-text text">
                    {aboutText.p3}
                </div>
            </div>
        </div>
      );
    } else {
      // Mobile.
      return (
        <div className="about-us-mobile mobile">
            <div className="about-p-mobile">
                <div className="text-big">
                    {aboutText.title}
                </div>
                <br/><br/>
                <div className="about-us-text text">
                    {aboutText.p11}
                    <div style={{marginTop: "12vw"}}></div>
                    {aboutText.p12}
                </div>
            </div>
            <br/><br/>
            <div className="about-p-mobile">
                {aboutText.title2}
                <br/><br/>
                <div className="about-us-text text">
                    {aboutText.p2}
                </div>
            </div>
            <div className="about-p-mobile">
                {aboutText.title3}
                <br/><br/>
                <div className="about-us-text text">
                    {aboutText.p3}
                </div>
            </div>
        </div>
      );
    }
  }