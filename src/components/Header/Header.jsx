import { AppBar, Toolbar, Button, } from "@material-ui/core";
// import { Link as RouterLink } from "react-router-dom";
import React from "react";


const headersData = [
    {
        label: 'Games',
        href: '/games'
    },
    {
        label: 'About Us',
        href: '/about',
    },
    {
        label: 'Contact',
        href: '/contact',
    },
];

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>FishBowl Teamv
        {getMenuButtons()}
    </Toolbar>;
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
        console.log(label, href);
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
          }}
        >
          {label}
        </Button>
      );
    });
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}