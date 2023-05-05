// convert into Hook Component
import React, { useState, useEffect } from "react";
import './index.css'
function Footer() {
  const [x, setX] = useState(100); // default values are overriden by useEffect() 
  const [y, setY] = useState(200);

  const updateData = () => {
    setX(500);
    setY(750);
  };
  // the dependency array overrides the value of x by calling useEffect() again
  useEffect(()=>{
        setX('Hello X')
        setY('Hello Y')
  },[x])

  return (
    <div>
      <h1> I am Footer </h1>
      <ol>
        <li>Value of X is {x} </li>
        <li>Value of Y is {y}</li>
      </ol>
      <button class="btn" onClick={() => updateData()} > Update Values of X and Y </button>
    </div>
  );
}
export default Footer;
