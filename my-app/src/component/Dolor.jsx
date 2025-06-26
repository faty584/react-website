import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./dolor.css";
import learnmore from "../assets/learn more.png";

import group3pic from "../assets/group3pic.png";

const Dolor = () => {


    return(
        <>
        <div className="dolorname">
            <img src={group3pic} alt="" className="group3" />
            <div className="dolor">
                <h2 className="sit">Lorem ipsum dolor sit amet consectetur </h2>
                <p className="amet">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                 <div className="learnmore-dolor">
                  <img src={learnmore} alt="" className="learnmore2" />
                </div>
            

        </div>
    

</div>
            
        </>
    );
};
export default Dolor;
