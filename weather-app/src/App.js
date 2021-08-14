import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles/main.scss";
import Header from "./components/header";
import Temperature from "./components/temperature";
import Weather from "./components/weather";
import Footer from "./components/footer";
function App() {
  const [current, setCurr] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    fetch("http://api.weatherapi.com/v1/current.json?q=Paris", {
      method: "GET",
      headers: {
        key: "1a4243cb7496444fbe5223908211308",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setCurr(data["current"]);
          setLocation(data["location"]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <input type="text" /> <button>Submit</button>
      <Header location={location} />
      <Temperature current={current} />
      <Weather current={current} />
      <Footer />
    </>
  );
}

export default App;
