
import React, { useEffect } from "react";
import "./Map.css";

function GoogleMap() {
  useEffect(() => {
    const iframeData = document.getElementById("iframeId");
    const lat = 12.002179;
    const lon = 8.591956;
    iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  }, []);

 

    return (
        <div className="map-container">
            <iframe
                id="iframeId"
                className="google-map-iframe"
                height="300px"
                width="400px"
                style={{ border: '0' }} // Inline styling for the iframe border
            ></iframe>
        </div>
    );
}

export default GoogleMap;
