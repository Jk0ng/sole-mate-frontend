import React, { useState } from "react";
import LinkedInLogo from '../assets/LinkedIn Logo.png'

const Footer = () => {

  

  return (
    <div className="Footer-content">
      <ul className="List">
        <li className="Created"> Created by: Joseph Kong & Samuel LaBrutte 
        </li>
        <li>
            Connect with Joseph 
          <a href="https://www.linkedin.com/in/j0sephk0ng" target="_blank" className="IconLink">
          <img src={LinkedInLogo} alt='LinkedInLogo' className="LinkedInLogo"/>
          </a>
        </li>
        <li>
            Connect with Samuel 
          <a href="www.linkedin.com/in/slabrutte" target="_blank" className="IconLink">
          <img src={LinkedInLogo} alt='LinkedInLogo' className="LinkedInLogo" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
