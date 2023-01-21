import logo from "./images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="balance">
          <p className="balance-txt">My balance</p>
          <p className="balance-value">$921.48</p>
        </div>
        <img className="logo" src={logo} alt="logo"></img>
      </div>
    </div>
  );
}

export default App;
