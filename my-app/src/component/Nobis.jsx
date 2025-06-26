import React from "react";
import { Link } from "react-router-dom";
import "./Nobis.css";
import group4pc from "../assets/Group 4pc.svg";
import learnmore from "../assets/learn more.png";

const Nobis = () => {
    return (
        <>
            <div className="Nobisname">
                    <img src={group4pc} alt="" className="group4" />
                    <div className="nobis">
                    <h2 className="sit">Lorem ipsum dolor sit amet consectetur </h2>
                    <p className="amet">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste? 
                </p>
                     <div className="learnmore-nobis">
                    <img src={learnmore} alt="" className="learnmore3" />
                    </div>
            </div>
            
            </div>
           
        </>
    );
};

export default Nobis;
