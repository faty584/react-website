import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./partners.css";
import google from "../assets/google.svg";
import micros from "../assets/micros.svg";
import fb from "../assets/fb.svg";
import spotify from "../assets/spotify.svg"
import learnmore from "../assets/learn more.png";



const Partners = () => {
  return (
    <>
    <div className="partners">
        <h2 className="partners1">PARTNERS</h2>
        {/* <div className="partners2"> */}
            <div> 
                <h2 className="Ipsum">Lorem Ipsum Dolor</h2>
                <p className="consectetur">Lorem ipsum, dolor sit amet consectetur
                       adipisicing elit. </p>
            
            </div>
            
            <div className="smooth">
                    <img src={google} alt="" className="google" />
                    <img src={micros} alt="" className="micros" />
                    <img src={fb} alt="" className="fb" />  
                    <img src={spotify} alt="" className="spotify"/>  
            
             </div>
            
        </div>
        <div className="learnmore">
            <img src={learnmore} alt="" className="learnmoreimg" />
            
        </div>
    {/* </div> */}
    
    </>
    )
};
export default Partners;

