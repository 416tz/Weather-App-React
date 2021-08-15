import React, { useEffect, useState } from "react";

function Header({location}) {
  function Time () {
   

  }
  return (
    <div class="header-container">

      <h1>{location.name +", "+location.country}</h1>
      <h2>{location.localtime}</h2>
    </div>
  );
}
export default Header;
