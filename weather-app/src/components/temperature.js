import { useEffect } from "react";
import pic1 from "../images/wi-thermometer.svg";
function Temperature({ current }) {
  return (
    <div class="temperature-container">
      <h3>
        {" "}
        <img src={pic1} class="picture" />
        {current.temp_c + "°"}
      </h3>
      <h4>{current.condition.text}</h4>
    </div>
  );
}
export default Temperature;
