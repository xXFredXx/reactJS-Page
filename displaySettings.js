import React from "react";

function displaySettings({name, image, Age}) {
  return (
    <div className="displaySetting">
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{Age}</p>


    </div>
  )
}

export default displaySettings