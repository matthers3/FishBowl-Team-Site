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

  const [currentUrl, setCurrentUrl] = useState("/");

  const getColor = () => {
    if (currentUrl == "/Alma") {
      return "alma-project";
    }
    else
    {
      return "default";
    }
  }

  const getSeparator = () => {
    if (currentUrl === "/Alma") {
      return "nav_bar_alma_separator.svg";
    }
    else
    {
      return "nav_bar_separator.svg";
    }
  }

  const isSelected = (currentPath) => {
    if (currentUrl === "/Alma" && currentPath === "Alma") {
      return "option-selected";
    }
    else if (currentUrl !== "/Alma" && currentPath === "Home")
    {
      return "option-selected";
    }
  }

  if (window.location.pathname !== currentUrl)
  {
    setCurrentUrl(window.location.pathname);
    console.log(window.location.pathname);
  }

  const displayDesktop = () => {
    return (
      <>  
        <div className={"nav-bar-options"}>
          <a href={`/`}>
            <div className={`option ${isSelected("Home")}`}>{headersData[0].label.toUpperCase()}</div>
          </a>
          <div><img alt="" src={getSeparator()} /></div>
          <a href={`/Alma`}>
            <div className={`option ${isSelected("Alma")}`}>{headersData[1].label.toUpperCase()}</div>
          </a>
        </div>
      </>);
  };

  const displayMobile = () => {
    return (
        <div className={`mobile-nav-bar-options nav-bar`}>
          <a className={`mobile-option ${isSelected("Home")}`} href={`/`} >
            <div className={`option`}>{headersData[0].label.toUpperCase()}</div>
          </a>
          <div><img alt="" src="nav_bar_separator.svg" /></div>
          <a className={`mobile-option ${isSelected("Alma")}`} href={`/Alma`}>
            <div className={`option`}>{headersData[1].label.toUpperCase()}</div>
          </a>
        </div>);
  };

  
  return (
    <div className="full-width">
      <BrowserView>
        <div className={`nav-bar nav-bar-${getColor()}`}>
          {displayDesktop()}
        </div>
      </BrowserView>
      <MobileView>
        <div className={`mobile-nav-bar nav-bar-${getColor()}`}>
          {displayMobile()}
        </div>
      </MobileView>
    </div>
  );
}