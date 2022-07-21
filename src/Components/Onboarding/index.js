import React from "react";
import Button from "../Button";
import illustration1 from "../assets/Modern.png";
import shadow from "../assets/Ellipse.png";
import "./index.scss"
function Onboarding() {
  return (
    <div className="container Onboarding">
      <div className="Board1">
        <img className="shadow" src={shadow} alt="shadow"/>
        <h2>Save, Buy and Sell Your blockchain asset</h2>
        <p className="Boardp">The easy to manage and trade your cryptocurency asset</p>
        <div className="buttons">
          <Button name="Connect Wallet" />
          <Button color = {"white"} name="Start Trading" />
        </div>
      </div>
      <div className="Board2">
      <img className="bigimage" src={illustration1} alt="an illustration"/> 
      <img className="shadow1" src={shadow} alt="shadow"/>

      </div>
    </div>
  );
}

export default Onboarding;
