import React from "react";
import logo from "../assets/Logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import discord from "../assets/discord.png";
import telegram from "../assets/telegram.png";
import './index.scss'
const Footer = () => {
  return (
    <div className=" footer">
        <div className="container footer1 ">
        <div className="quick">
        <img className="logo" src={logo} alt="" />
        <p>
          Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint.
          Velit officia consequatduis enim velit mollit. Exercitation
          veniamconsequat sunt nostrud amet.
        </p>
      </div>
      <div className="quick2">
        <h3>Quick Link</h3>
          <p>How it work</p>
          <p>Blog</p>
          <p>Support</p>
      </div>
      <div className="quick3">
        <h3>Social Media</h3>
        <div className="Social_media">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
          <img src={discord} alt="" />
          <img src={telegram} alt="" />{" "}
        </div>
      </div>
      <div className="quick4">
      <p  className="container">(c) 2022 Circlechain</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
