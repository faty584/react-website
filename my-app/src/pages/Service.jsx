import React from "react";
import { Link } from "react-router-dom";
import './Service.css'
import Dola$ from "../assets/Dola$.png";
import Vector from "../assets/Vector.png";
import learnmore from "../assets/learn more.png";
import $$250 from "../assets/$$250.png";
import DL$400 from "../assets/DL$400.png";

function Service() {
  return (
    <>
    <div className="servicehome">
      <div className="workplane">
        <h2 className="Plans">PLANS</h2>
                    <h3 className="OurServices">Our Services</h3>
                    <p className="prplan">Lorem ipsum, dolor sit amet consectetur
adipisicing elit.</p>

      </div>
<div className="ParentDiv">
        <div className="cards">
          <h3 className="Basic">Basic</h3>
          <img src={Dola$} alt="Dola$" className="dolas" />
          <h5 className="h5m">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</h5>
          <div className="verse">
          
            <li><span><img src={Vector} alt="Vector" className="vectorone "/></span><p className="paracard">Lorem ipsum, dolor sit </p></li>
            <li><span><img src={Vector} alt="Vector" className="vectortwo "/></span><p className="paracard2">Lorem ipsum, dolor sit </p></li>
            <li><span><img src={Vector} alt="Vector" className="vectorthree "/></span><p className="paracard3">Lorem ipsum, dolor sit </p></li>
            <li><span><img src={Vector} alt="Vector" className="vectorfour "/></span><p className="paracard4">Lorem ipsum, dolor sit </p></li>
            <li><span><img src={Vector} alt="Vector" className="vectorfive "/></span><p className="paracard5">Lorem ipsum, dolor sit </p></li>         
            <img src={learnmore} alt="learnmore" className="moreone" />

          </div>
          


        </div>
        <div className="cardsone">
              <h3 className="Plus">Plus</h3>
              <img src={$$250} alt="$$250" className="dnam" />
              <h5 className="h5mone">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</h5>
              <div class="maiverse">
              <li><span><img src={Vector} alt="Vector" className="vectorone "/></span><p className="paracard">Lorem ipsum, dolor sit </p></li> 
              <li><span><img src={Vector} alt="Vector" className="vectortwo "/></span><p className="paracard2">Lorem ipsum, dolor sit </p></li>
              <li><span><img src={Vector} alt="Vector" className="vectorthree "/></span><p className="paracard3">Lorem ipsum, dolor sit </p></li> 
              <li><span><img src={Vector} alt="Vector" className="vectorfour "/></span><p className="paracard4">Lorem ipsum, dolor sit </p></li> 
              <li><span><img src={Vector} alt="Vector" className="vectorfive "/></span><p className="paracard5">Lorem ipsum, dolor sit </p></li> 
              <img src={learnmore} alt="learnmore" className="moretwo" />


              </div>
              
        </div>
        <div className="cardstwo">
              <h3 className="Pro">Pro</h3>
              <img src={DL$400} alt="DL$400" className="DL400" />
              <h5 className="h5mtwo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</h5>
              <div className="secondverse">
                <li><span><img src={Vector} alt="Vector" className="vectorone "/></span><p className="paracard">Lorem ipsum, dolor sit </p></li>
                <li><span><img src={Vector} alt="Vector" className="vectortwo "/></span><p className="paracard2">Lorem ipsum, dolor sit </p></li>
                <li><span><img src={Vector} alt="Vector" className="vectorthree "/></span><p className="paracard3">Lorem ipsum, dolor sit </p></li>
                <li><span><img src={Vector} alt="Vector" className="vectorfour "/></span><p className="paracard4">Lorem ipsum, dolor sit </p></li>         
                <li><span><img src={Vector} alt="Vector" className="vectorfive "/></span><p className="paracard5">Lorem ipsum, dolor sit </p></li>
                <img src={learnmore} alt="learnmore" className="morethree" />

              </div>
    </div>
</div>


    </div>
      
  
    </>
  );
}

export default Service;