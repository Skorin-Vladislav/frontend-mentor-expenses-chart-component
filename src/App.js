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

      <div className="spending-box">
        <h2 className="spending-txt">Spending - Last 7 days</h2>

        <div className="charts"></div>

        <div className="charts-results">
          <div className="total">
            <p className="total-txt">Total this month</p>
            <p className="total-value">$478.33</p>
          </div>

          <div className="changes">
            <p className="change-percent">+2.4%</p>
            <p className="last-month">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
