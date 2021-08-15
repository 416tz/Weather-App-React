import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles/main.scss";
import Header from "./components/header";
import Temperature from "./components/temperature";
import Weather from "./components/weather";
import Footer from "./components/footer";
function App() {
  const [current, setCurr] = useState({condition:{text:"loading..."}});
  const [location, setLocation] = useState({});
  const [input, setInput] = useState ("Paris");
  useEffect(() => {
    fetch("http://api.weatherapi.com/v1/current.json?q=" + input, {
      method: "GET",
      headers: {
        key: "1a4243cb7496444fbe5223908211308",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          if (data.error != undefined) {
            alert("WRONG LOCATION")
          }
          else{
            setCurr(data["current"]);
            setLocation(data["location"]);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [input]);
function Input () {
  let d = document.getElementById("input").value;
  console.log(d);
  setInput(d);
}
  return (
    <>
      <input id = "input" type="text" /> <button onClick={Input}> Submit</button> 

      <Header location={location} />
      <Temperature current={current} />
      <Weather current={current} />
      <Footer />
    </>
  );
}

export default App;
