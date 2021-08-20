import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles/main.scss";
import Header from "./components/header";
import Temperature from "./components/temperature";
import Weather from "./components/weather";
function App() {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const [current, setCurr] = useState({ condition: { text: "loading..." } });
  const [location, setLocation] = useState({});
  const [input, setInput] = useState("Toronto");

  useEffect(() => {
    fetch("https://api.weatherapi.com/v1/current.json?q=" + input, {
      method: "GET",
      headers: {
        key: "c22cb4a0cbba4e08a43185459212008",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          if (data.error != undefined) {
            alert("WRONG LOCATION");
          } else {
            let d = data.location.localtime;
            let time = d.split("-");
            let month = time[1];
            time[1] = months[parseInt(month) - 1];
            data.location.localtime = time.toString();
            setCurr(data["current"]);
            setLocation(data["location"]);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [input]);
  function Input() {
    let d = document.getElementById("input").value;
    console.log(d);
    setInput(d);
  }
  return (
    <>
      <div class="searchbar">
        <input id="input" type="text" placeholder="Search..." />{" "}
        <button onClick={Input}> Submit</button>
      </div>
      <Header location={location} />
      <Temperature current={current} />
      <Weather current={current} />
    </>
  );
}

export default App;
