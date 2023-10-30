import React from "react";
import {Link} from "react-router-dom";
import "../styles/nav.css";

function nav() {
  return <div className="navBar">

        <div className="Left"></div>
            {/* <img src ={} /> Add Website Logo */}
        <div className="Right"></div>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/more"> More</Link>
           
        


  </div>;
}

export default nav;
