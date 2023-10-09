import React from 'react'
import "../components/display.css";
import logo from '../assets/img/logo.png';
import image_avatar from '../assets/img/image_avatar.jpg';
import mode from '../assets/img/mode.png';

const SideBar = () => {

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode", !isDarkMode);
        document.body.classList.toggle("light-mode", isDarkMode);
        setIsDarkMode(!isDarkMode);
      };
  return (
    <div className="header">
        <div className="pic">
          <img src={logo} alt="" id="pic" />
        </div>
        <div className="mode">
          <img
            src={mode}
            alt=""
            id="mode"
            onClick={toggleDarkMode}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="profile">
          <img
            src={image_avatar}
            alt=""
            className="avatar"
          />
        </div>
      </div>
  )
}

export default SideBar