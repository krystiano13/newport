import React from "react";

import facebook from "../assets/facebook.png";
import mail from "../assets/mail.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="container-lg">
      <div className="images d-flex justify-content-evenly align-items-center">
        <img src={facebook} alt="facebook logo" />
        <img src={twitter} alt="twitter logo" />
        <img src={mail} alt="mail" />
      </div>
      <p className="lead text-center">Made by Krystian Zieja</p>
    </footer>
  );
};

export { Footer };
