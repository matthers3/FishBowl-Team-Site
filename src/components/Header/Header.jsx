import React from "react";
import './Header.scss';

const headersData = [
    { label: 'Home' },
    { label: 'Projects'},
    { label: 'About' },
    { label: 'Contact' },
];

export default function Header() {
  
  const getMenuButtons = () => {
    return headersData.map(({ label }) => {
      return (<div>{label}</div>);
    });
  };

  const displayDesktop = () => {
    return <> {getMenuButtons()} </>;
  };
  
  return (
    <div className="nav-bar">
      {displayDesktop()}
    </div>
  );
}