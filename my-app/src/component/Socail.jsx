import React from "react";
import { Link } from "react-router-dom";
import "./Social.css";
import Facebook from "../assets/facebook.png";
import Instr from "../assets/instr.svg";
import Twr from "../assets/twr.svg";
import PAIT from "../assets/P.svg";
import Tic from "../assets/tic.svg";
import Whatsapp from "../assets/Whatsapp.svg";
import Youtube from "../assets/Youtube.svg";


const Socail = () => {
    return (
        <>
            <div className="Socailname">
                <div social-icons className="socail-icons">
                <img src={Facebook} alt="facebook" className="facebookone" />
                <img src={Instr} alt="instr" className="instr" />
                <img src={Twr} alt="Twr" className="twr" />
                <img src={PAIT} alt="PAIT" className="p" />
                <img src={Tic} alt="Tic" className="tic" />
                <img src={Whatsapp} alt="Whatsapp" className="whatsapp" />
                <img src={Youtube} alt=" Youtube" className=" youtube" />
                </div>
                   <div>
                    <h3 className="Socail-title">© Start, 2022. All rights reserved.</h3>
                   </div>
                    
                </div>

        
    
        </>
    );
};

export default Socail;

