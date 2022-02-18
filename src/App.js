import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
