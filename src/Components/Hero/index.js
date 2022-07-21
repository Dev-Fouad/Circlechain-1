import React from "react";
import Rectangle from "../Rectangle";
import shape from "../assets/Illustration.png"
import shadow from "../assets/Ellipse.png"
import './index.scss'
function Hero() {
  return (
    <div className=" container hero3">
    <img className="shadow2" src={shadow} alt="shadow"/>
      <h2>Global Decentralize currency based on blockchain technology</h2>
      <p className="heroes">Web3 is the latest efficient technology</p>
      <img className="shadow3" src={shadow} alt="shadow"/>
      <div className="hero">
      <div className="hero1">
      <img src ={shape} alt=""/>
      </div>
      <div className="hero2">
      <Rectangle
      h5= "Access Token Market"
      p="Buy and sell token anytime
      and anywhere"
      />
      <Rectangle
      h5= "User Friendly Interface "
      p="Easy to navigate"
      />
      <Rectangle
      h5= "Ownership Token control"
      p="Be in control and own as many
      asset as possible"
      />
      </div>
      </div>
    </div>
  );
}

export default Hero;
