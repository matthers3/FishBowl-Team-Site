import React from "react";
import { isDesktop } from "react-device-detect";
import "./OurValues.scss";

export default function OurValues() {

    const link = "https://www.youtube.com/watch?v=6oHYgG5DFSM&ab_channel=EnergyPowerCreation";
    const aboutText = {
    title: <div className="medium values-title text-big">
        OUR VALUES “<strong className="marina">WEONES </strong> 
        <strong className="emi">PERO </strong> 
        <strong className="alma">AUTÉNTICOS</strong>"
    </div>,
    title_mobile: <div className="medium values-title text-big">
    OUR VALUES <br/>“<strong className="marina">WEONES </strong> 
    <strong className="emi">PERO </strong> 
    <strong className="alma">AUTÉNTICOS</strong>"
    </div>,
    title1: <strong className="extra-bold medium marina">🧡 Silliness</strong>,
    p1: <p className="text">We are not preachers, we hate to take ourselves too seriously, we deeply 
    believe powerful messages are better delivered with a healthy and generous amount 
    of silliness and light-hearted comedy. We love everything ridiculous, whimsical and fun, 
    and every time we work on something, we try to make each other laugh with it… 
    it’s our love language. 
    </p>,
    title2: <strong className="alma medium">💙 Authenticity</strong>,
    p2: <p className="text">We have a very specific vision about the experiences we 
    want to portray… we wish to pursue an un-sanitized and genuine version of that vision, 
    without having to whitewash our own experiences as young adults trying to survive 
    in South America.
    <br/><br/>
    <strong className="alma">✨ <a href={link} className="blue-link" target="_blank" rel="noreferrer">This</a> is also extremely important to us ✨</strong>
    </p>,
    p2_mobile: <p className="text">We have a very specific vision about the experiences we 
    want to portray… we wish to pursue an un-sanitized and genuine version of that vision, 
    without having to whitewash our own experiences as young adults trying to survive 
    in South America.
    <br/><br/>
    <strong className="alma">✨ <a href={link} className="blue-link" target="_blank" rel="noreferrer">This</a> is also extremely <br/>important to us ✨</strong>
    </p>,
    title3: <strong className="emi medium">💛 Representation</strong>,
    p3: <p className="text">Fishbowl Team was founded by LGBTQA+, South American young adults, 
    who grew up on video games that portrayed us as villains, sidekicks and cannon fodder. 
    So we specially care about bringing representation to a sector of the gaming 
    community that is criminally overlooked - South American women and girls.
    The message is simple and clear, South American girls and non-binary folks 
    can and should be protagonists and heroes, because their stories are deeply 
    interesting, and their identities matter.  </p>,
    title4: <strong className="medium">🧡🤝💛🤝💙</strong>,
    p4: <p className="text">
        <strong className="extra-bold">Weón/weona</strong> is a slang word from Chile that can mean different things depending 
        on the context. It can be a way of calling someone an idiot, a dumb-ass, 
        an imbecile, or just plain stupid. But with a little bit of finesse it can 
        also be a term of endearment. It can mean dude, chick, friend, pal or mate 
        (<a className="white-link" target="_blank" href="https://www.tumblr.com/puroespanol/136204794584/meaning-of-weon-chile" rel="noreferrer">source</a>). In this case, it’s both at the same time.
    </p>
    }

    if (isDesktop)
    {
      return (
        <div className="desktop">
            {aboutText.title}
            <div className="values desktop">
                <div className="values-col">
                    <div className="values-cel">
                        {aboutText.title1}
                        {aboutText.p1}
                    </div>
                    <div className="values-cel">
                        {aboutText.title2}
                        {aboutText.p2}
                    </div>
                </div>
                <div className="values-col">
                    <div className="values-cel">
                        {aboutText.title3}
                        {aboutText.p3}
                    </div>
                    <div className="values-cel">
                        {aboutText.title4}
                        {aboutText.p4}
                    </div>
                </div>
            </div>
        </div>
      );
    } else {
      // Mobile.
      return (
        <div className="mobile">
            {aboutText.title_mobile}
            <div className="values-mobile mobile">
                <div className="values-col-mobile">
                    <div className="values-cel-mobile">
                        {aboutText.title1}
                        {aboutText.p1}
                    </div>
                    <div className="values-cel-mobile">
                        {aboutText.title2}
                        {aboutText.p2_mobile}
                    </div>
                    <div className="values-cel-mobile">
                        {aboutText.title3}
                        {aboutText.p3}
                    </div>
                    <div className="values-cel-mobile">
                        {aboutText.title4}
                        {aboutText.p4}
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }