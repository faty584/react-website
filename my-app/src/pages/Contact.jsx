import { useState } from "react";
import "./Contact.css";
import Map from "../component/Map.jsx";




const Contact = () => {
    const  [formData, setFormData] = useState ({
        name: "",
        email: "",
        message: ""
    });
    const handleInputChange =(event) => {
        const {id, value} = event.target;
        setFormData ({
            ...formData,
            [id]:value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted ", formData);

        setFormData ({
            name: "",
            email: "",
            message: ""
        });
    };

    return ( 
        <div className="contactparentDiv">
            <div className="contact">
                <h4 className="contactushfour">Contact Us</h4>
                <p className="contactuspara">
                    Lorem ipsum, dolor sit amet consectetur<br /> 
                    adipisicing elit.
                </p>
            </div>
            <div className="both">
                <div className="geolocation">
                    <Map />
                </div>
                <div className="contactinfo">
                    <form onSubmit={handleSubmit}>
                       <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            required


                        />
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                             required
                        />
                        <label forhtmlFor="message">Message</label>
                        <input 
                            type="text" 
                            className="messageinput" 
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                             required

                        />
                        <button className="contactusbutton"> Submit </button>
                    </form>
                </div>
            </div>
            
        </div>
     );
}
 
export default Contact;
