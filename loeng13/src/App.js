import logo from './logo.svg';
import './App.css';

function Pealkiri() {
  return (
    <h1>Pealkiri</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Pealkiri />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ilusti muudab ära
        </p>
        asdf
      </header>
    </div>
  );
}

export default App;
