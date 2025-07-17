import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./welcome.css";
import group2pic from "../assets/Group2pic.png";
import explore from "../assets/explore.png";


const Welcome = () => {
  return (
    <div className="welcome">
      <img src={group2pic} alt="" className="group2pic" />
      <div>
<h2 className="h2">WELCOME</h2>
      <h1 className="lorem">Lorem ipsum dolor sit amet consectetur </h1>
      <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
      <img src={explore} alt="" className="explore" />
      </div>
        
      
    </div>
  );
};

export default Welcome;
