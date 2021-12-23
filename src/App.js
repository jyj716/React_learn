import logo from './logo.svg';
import './App.css';

const element = <div> This Is JSX</div>;
function greeting(name) {
  if (name == "Cat") {
    return "CAT !! HELLO!! " + name;
  } else {
    return "Hello! " + name;
  }
}
const elements = (
  <div><thead><th>Name</th><th>Address</th></thead><tbody>
    <td>Yujin</td><td>Daejeon</td></tbody></div>
)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {element}
        {greeting("Dog")}
        <h1>Yujin</h1>
        {elements}
      </header>
    </div>
  );
}

export default App;
