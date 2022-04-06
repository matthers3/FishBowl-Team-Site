import React from "react";
import { BrowserView, MobileView } from 'react-device-detect';
import { scrollTo } from "../../utils/scrollTo";
import './Header.scss';

const headersData = [
    { label: 'Home' },
    { label: 'Projects'},
    { label: 'About' },
    { label: 'Contact' },
];

export default function Header(props) {

  const displayDesktop = () => {
    return (
      <>  
        <div className="nav-bar-options">
          <div onClick={() => scrollTo({ id: "home", duration: 50 })} 
            className="option">{headersData[0].label.toUpperCase()}</div>
          <div><img src="nav_bar_separator.svg" /></div>
          <div onClick={() => scrollTo({ id: "projects", duration: 50 })}
            className="option">{headersData[1].label.toUpperCase()}</div>
          <div><img src="nav_bar_separator.svg" /></div>
          <div onClick={() => scrollTo({ id: "about", duration: 50 })}
            className="option">{headersData[2].label.toUpperCase()}</div>
          <div><img src="nav_bar_separator.svg" /></div>
          <div onClick={() => scrollTo({ id: "contact", duration: 50 })}
            className="option">{headersData[3].label.toUpperCase()}</div>
        </div>
      </>);
  };

  const displayMobile = () => {
    return (
        <div className="mobile-nav-bar-options">
          <div onClick={() => scrollTo({ id: "home", duration: 50 })} 
            className="option option-selected">{headersData[0].label.toUpperCase()}</div>
          <div><img src="nav_bar_separator.svg" /></div>
          <div onClick={() => scrollTo({ id: "projects", duration: 50 })}
            className="option">{headersData[1].label.toUpperCase()}</div>
          <div><img src="nav_bar_separator.svg" /></div>
          <div onClick={() => scrollTo({ id: "about", duration: 50 })}
            className="option">{headersData[2].label.toUpperCase()}</div>
          <div><img src="nav_bar_separator.svg" /></div>
          <div onClick={() => scrollTo({ id: "contact", duration: 50 })}
            className="option">{headersData[3].label.toUpperCase()}</div>
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