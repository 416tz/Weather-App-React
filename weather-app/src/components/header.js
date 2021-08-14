import React, { useEffect, useState } from "react";

function Header({location}) {
  const [time, setTime] = useState(() => {
    let currDate = new Date();
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
    return (
      currDate.getDate() +
      "-" +
      months[currDate.getMonth()] +
      "-" +
      currDate.getFullYear() + "," +
      currDate.getHours() + ":" +
      currDate.getMinutes() 
    );
  });
  return (
    <div class="header-container">
      <h1>{location.name +", "+location.country}</h1>
      <h2>{location.localtime}</h2>
    </div>
  );
}
export default Header;
