import { React, useState } from "react";
import { BrowserView, MobileView } from 'react-device-detect';
import { scrollTo } from "../../utils/scrollTo";
import './Header.scss';

const headersData = [
    { label: 'Home' },
    { label: 'Alma'},
    { label: 'About & Contact' },
    { label: 'Contact' },
];

export default function Header(props) {

  const [position, setPosition] = useState(window.scrollY);

  function getAbsoluteHeight(el) {
    // Get the DOM Node if you pass in a string
    el = (typeof el === 'string') ? document.querySelector(el) : el; 
  
    var styles = window.getComputedStyle(el);
    var margin = parseFloat(styles['marginTop']) +
                 parseFloat(styles['marginBottom']);
  
    return Math.ceil(el.offsetHeight);
  }

  // const shouldActivate = (id) => {
  //   try {
  //     const elementY = document.getElementById(id).offsetTop;
  //     const elementHeight = getAbsoluteHeight(document.getElementById(id));
  //     const topMargin = -85;
  //     const bottomMargin = 0;
  //     if (position > elementY + topMargin && 
  //         position < elementY + elementHeight + bottomMargin) {
  //       return "option-selected";
  //     }
  //     return "";
  //   } catch {
  //     if (id == "home") {
  //       return "option-selected";
  //     }
  //   }
  // }

  // const changePosition = () =>{
  //   setPosition(window.scrollY);
  // };

  // window.addEventListener('scroll', changePosition);


  // const amountOfPixelsToScroll = initialPosition - targetPosition + globalMargin;

  const displayDesktop = () => {
    return (
      <>  
        <div className="nav-bar-options">
          <a href={`/`}><div className={`option`}>{headersData[0].label.toUpperCase()}</div></a>
          <div><img alt="" src="nav_bar_separator.svg" /></div>
          <a href={`/Alma`}><div className={`option`}>{headersData[1].label.toUpperCase()}</div></a>
          {/* <div><img src="nav_bar_separator.svg" /></div>
          <div onClick={() => scrollTo({ id: "about", duration: 50 })}
            className={`option`}>{headersData[2].label.toUpperCase()}</div> */}
        </div>
      </>);
  };

  const displayMobile = () => {
    return (
        <div className="mobile-nav-bar-options">
          <div onClick={() => scrollTo({ id: "home", duration: 50 })} 
            className={`option`}>{headersData[0].label.toUpperCase()}</div>
          <div><img src="nav_bar_separator.svg" /></div>
          <div onClick={() => scrollTo({ id: "projects", duration: 50 })}
            className={`option`}>{headersData[1].label.toUpperCase()}</div>
          {/* <div><img src="nav_bar_separator.svg" /></div>
          <div onClick={() => scrollTo({ id: "about", duration: 50 })}
            className={`option`}>{headersData[2].label.toUpperCase()}</div> */}
        </div>);
  };

  
  return (
    <div className="full-width">
      <BrowserView>
        <div className="nav-bar">
          {displayDesktop()}
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile-nav-bar">
          {displayMobile()}
        </div>
      </MobileView>
    </div>
  );
}