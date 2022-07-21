import React, { useState } from "react";
import Button from "../Button";
import shadow from "../assets/Ellipse.png"
import './index.scss'
const Message = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="blur">
      <h4>Want to be aware of all update</h4>
      <img className="shadow5" src={shadow} alt="shadow"/>
      <div className="text">

        <div>
          <input
            type="text"
            value={message}
            placeholder=""
            onChange={e => {
              const newMessageObj = { message: e.target.value };
              // setMessage(newMessageObj); // Now it works
            }}          />
          <p>
            <strong>{message}</strong>
          </p>
        </div>
        <Button name="Subscribe" />
      </div>
      <img className="shadow6" src={shadow} alt="shadow"/>

    </div>
  );
};

export default Message;
