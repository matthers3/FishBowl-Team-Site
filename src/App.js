import './App.css';
import Header from './components/Header/Header';
import LogoContainer from './components/Logo Container/LogoContainer';
import ContactButton from './components/ContactButton/ContactButton';

function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <Header/>
        <LogoContainer></LogoContainer>
        <ContactButton></ContactButton>
      </div>
    </div>
  );
}

export default App;
