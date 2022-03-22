import './App.css';
import Header from './components/Header/Header';
import LogoContainer from './components/Logo Container/LogoContainer';
import ContactButton from './components/ContactButton/ContactButton';
import WaterContainer from './components/WaterContainer/WaterContainer';

function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <Header/>
        <LogoContainer></LogoContainer>
        <ContactButton></ContactButton>
        <WaterContainer></WaterContainer>
      </div>
    </div>
  );
}

export default App;
