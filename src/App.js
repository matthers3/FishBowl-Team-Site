import './App.css';
import Header from './components/Header/Header';
import LogoContainer from './components/Logo Container/LogoContainer';
import ContactButton from './components/ContactButton/ContactButton';
import WaterContainer from './components/WaterContainer/WaterContainer';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <Header/>
        <LogoContainer></LogoContainer>
        <ContactButton></ContactButton>
        <Projects></Projects>
        <WaterContainer></WaterContainer>
      </div>
    </div>
  );
}

export default App;
