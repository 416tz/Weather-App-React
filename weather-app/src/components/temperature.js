import { useEffect } from "react";

function Temperature({ current }) {
  return (
    <div class="temperature-container">
      <h3> {current.temp_c + "°"}</h3>
      <h4>{current.condition.text}</h4>
    </div>
  );
}
export default Temperature;
