import logo from "./images/logo.svg";
import data from "./data/data.json";
import { useState } from "react";
import { useEffect } from "react";

import "./App.css";

function App() {
  let [mon, setMon] = useState(0);
  let [tue, setTue] = useState(0);
  let [wed, setWed] = useState(0);
  let [thu, setThu] = useState(0);
  let [fri, setFri] = useState(0);
  let [sat, setSat] = useState(0);
  let [sun, setSun] = useState(0);

  let [sum, setSum] = useState(0);

  function changeSum() {
    setSum(mon + tue + wed + thu + fri + sat + sun);
  }

  function changeMon(value) {
    setMon(value);
  }

  function changeTue(value) {
    setTue(value);
  }

  function changeWed(value) {
    setWed(value);
  }

  function changeThu(value) {
    setThu(value);
  }

  function changeFri(value) {
    setFri(value);
  }

  function changeSat(value) {
    setSat(value);
  }

  function changeSun(value) {
    setSun(value);
  }

  let dataJS = data;

  useEffect(() => {
    changeMon(dataJS[0].amount);
    changeTue(dataJS[1].amount);
    changeWed(dataJS[2].amount);
    changeThu(dataJS[3].amount);
    changeFri(dataJS[4].amount);
    changeSat(dataJS[5].amount);
    changeSun(dataJS[6].amount);
    changeSum();
    currentDayColor();
  });

  function currentDayColor() {
    const currentDay = (new Date().getDay() - 1 + 7) % 7;
    const today = document.querySelectorAll(".chart")[currentDay];
    today.classList.add("today");
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <div className="balance">
            <p className="balance-txt">My balance</p>
            <p className="balance-value">$921.48</p>
          </div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>

        <div className="spending-box">
          <h2 className="spending-txt">Spending - Last 7 days</h2>

          <div className="charts">
            <div
              id="mon"
              amount={`$${mon}`}
              style={{
                maxHeight: `${Math.round(((mon / sum) * 375).toFixed(2))}%`,
                height: `${Math.round(((mon / sum) * 375).toFixed(2))}%`,
              }}
              className="chart"
            ></div>
            <div
              id="tue"
              amount={`$${tue}`}
              style={{
                maxHeight: `${Math.round(((tue / sum) * 375).toFixed(2))}%`,
                height: `${Math.round(((tue / sum) * 375).toFixed(2))}%`,
              }}
              className="chart"
            ></div>
            <div
              id="wed"
              amount={`$${wed}`}
              style={{
                maxHeight: `${Math.round(((wed / sum) * 375).toFixed(2))}%`,
                height: `${Math.round(((wed / sum) * 375).toFixed(2))}%`,
              }}
              className="chart"
            ></div>
            <div
              id="thu"
              amount={`$${thu}`}
              style={{
                maxHeight: `${Math.round(((thu / sum) * 375).toFixed(2))}%`,
                height: `${Math.round(((thu / sum) * 375).toFixed(2))}%`,
              }}
              className="chart"
            ></div>
            <div
              id="fri"
              amount={`$${fri}`}
              style={{
                maxHeight: `${Math.round(((fri / sum) * 375).toFixed(2))}%`,
                height: `${Math.round(((fri / sum) * 375).toFixed(2))}%`,
              }}
              className="chart"
            ></div>
            <div
              id="sat"
              amount={`$${sat}`}
              style={{
                maxHeight: `${Math.round(((sat / sum) * 375).toFixed(2))}%`,
                height: `${Math.round(((sat / sum) * 375).toFixed(2))}%`,
              }}
              className="chart"
            ></div>
            <div
              id="sun"
              amount={`$${sun}`}
              style={{
                maxHeight: `${Math.round(((sun / sum) * 375).toFixed(2))}%`,
                height: `${Math.round(((sun / sum) * 375).toFixed(2))}%`,
              }}
              className="chart"
            ></div>

            <p className="mon">mon</p>
            <p className="tue">tue</p>
            <p className="wed">wed</p>
            <p className="thu">thu</p>
            <p className="fri">fri</p>
            <p className="sat">sat</p>
            <p className="sun">sun</p>
          </div>
          <hr className="line"></hr>
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
    </div>
  );
}

export default App;
