import React from "react";
import { AboutList } from "../additional/aboutList";
import displaySettings from "../Reuse/displaySettings";
import "../styles/about.css"; 

function About() {
  return (
    <div className="about">
      <h1 className="aboutPage">About the Developer</h1>
      <div className="aboutList">
        {AboutList.map((displaySettings, key) => {
          return (
            <displaySettings
              key = {key}
              name={displaySettings.name}
              image={displaySettings.image}
              Age={displaySettings.Age}
            />
          );
        })}
      </div>
    </div>
  );
}

export default About;
