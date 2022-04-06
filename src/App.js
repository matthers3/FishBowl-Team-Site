import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import LogoContainer from './components/Logo Container/LogoContainer';
import WaterContainer from './components/WaterContainer/WaterContainer';
import Projects from './components/Projects/Projects';

function App() {

  return (
    <div className="App">
      <div className="App-Container">
        <Header/>
        <LogoContainer></LogoContainer>
        <Projects></Projects>
        <WaterContainer></WaterContainer>
      </div>
    </div>
  );
}

export default App;
