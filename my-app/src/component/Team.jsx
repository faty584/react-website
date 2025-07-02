import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";
import groupWoman from "../assets/Group woman.png";
import groupMask from "../assets/Group mask.png";
import groupGlass from "../assets/Group glass.png";
import groupBray from "../assets/Group bray.png";
import VeiwTeam from "../assets/Veiwteam.png";

const Team = () => {
    return (
        <>
            <div className="Taemname">
                <div className="teams">
                    <h2 className="team-title">Team</h2>
                    <h2 className="our-talents">Our Talents</h2>
                    <p className="team-desc">Lorem ipsum, dolor sit amet consectetur
adipisicing elit.</p>
                </div>

                <img src={groupWoman} alt="Group Woman" className="woman" />
                <img src={groupMask} alt="Group Mask" className="mask" />
                <img src={groupGlass} alt="Group Glass" className="glass" />
                <img src={groupBray} alt="Group Bray" className="bray" />
            </div>

            <div className="VeiwTeam">
                <img src={VeiwTeam} alt="VeiwTeam" className="VeiwTeam4" />
            </div>
        </>
    );
};

export default Team;
