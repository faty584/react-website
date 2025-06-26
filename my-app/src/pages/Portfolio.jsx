// import Navbar from "../component/Navbar";
import "./Portfolio.css";
import React from "react";
import { Link } from "react-router-dom";
import Ladingpage from "../assets/Ladingpage.svg";
import Webdesign from "../assets/Webdesign.svg";
import Rocketbusiness from "../assets/Rocketbusiness.svg";
import Shopping from "../assets/Shopping.svg";
import Geometric from "../assets/Geometric.svg";
import Trick from "../assets/Trick.svg";
import Halloween from "../assets/Halloween.svg";
import Virtual from "../assets/Virtual.png";
import learnmore from "../assets/learn more.png"; 

const Portfolio = () => {
    return (
        <>
            {/* <Navbar />  */}
            <div className="Portfolio">
                <div className="Works-Portfolio">
                    <h2 className="works">WORKS</h2>
                    <h3 className="Portfolio">Portfolio</h3>
                    <p className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="cardpor">
                    <img src={Ladingpage} alt="Landing Page" className="Ladingpage" />
                    <img src={Webdesign} alt="Web Design" className="Webdesign" />
                    <img src={Rocketbusiness} alt="Rocket Business" className="Rocketbusiness" />
                    <img src={Shopping} alt="Shopping" className="Shopping" />
                    <img src={Geometric} alt="Geometric" className="Geometric" />
                    <img src={Trick} alt="Trick" className="Trick" />
                    <img src={Halloween} alt="Halloween" className="Halloween" />
                    <img src={Virtual} alt="Virtual" className="Virtual" />
                    <div className="morevalid">
                        <img src={learnmore} alt="Learn More" className="more" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
