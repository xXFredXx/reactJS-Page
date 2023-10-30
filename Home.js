import React from "react";
import {Link} from "react-router-dom";
import Header from "../media/artificial-intelligence-3382507_1280.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className ="home" style={{ backgroundImage: `url(${Header})`}}>
            <div className="headerContainer"> 

                

                
                    <Link to="/about">
                    <button>Explore More!</button>
                    </Link>
        
            </div>
    </div>
  )
}

export default Home