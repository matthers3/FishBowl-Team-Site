import './MainSite.css';
import React from 'react';
import LogoContainer from '../../components/Logo Container/LogoContainer';
import WaterContainer from '../../components/WaterContainer/WaterContainer';
import Projects from '../../components/Projects/Projects';

function MainSite() {

  return (
    <div className="App">
      <div className="App-Container">
        <LogoContainer></LogoContainer>
        <WaterContainer></WaterContainer>
      </div>
    </div>
  );
}

export default MainSite;
