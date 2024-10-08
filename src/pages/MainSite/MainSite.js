import './MainSite.scss';
import React from 'react';
import LogoContainer from '../../components/Logo Container/LogoContainer';
import WaterContainer from '../../components/WaterContainer/WaterContainer';
import Projects from '../../components/Projects/Projects';

function MainSite() {

  return (
    <div className="App">
      <div className="App-Container main-site">
        <LogoContainer></LogoContainer>
        <WaterContainer></WaterContainer>
      </div>
    </div>
  );
}

export default MainSite;
