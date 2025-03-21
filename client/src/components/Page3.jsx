import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "../styles/Page3.css";  // Import CSS file
import HMM from "../../../server/models/HMM.js"

const pages = ["AccessPage", "Page1", "Page2", "Page3", "Page4"];
const hmm = new HMM(pages); // Initialize HMM with pages

function Page3() {
    const location = useLocation();
    const [previousPage, setPreviousPage] = useState("None");

    useEffect(() => {
        const storedPrevPage = sessionStorage.getItem("previousPage");
        if (storedPrevPage) {
            setPreviousPage(storedPrevPage);
        }
    }, []);

    const handleClick = (toIndex) => {
        sessionStorage.setItem("previousPage", "Page3"); // ✅ set BEFORE navigating
        hmm.updateHMM(3, toIndex);
    };

    const handleQuit = () => {
        alert("You have left the system.");
        sessionStorage.clear();
        navigate("/");
    };
    return (
        <div className="page-container">
                       {/* Current Page Info (Top Right) */}
                       <div className="access-page-info">
            <p className="from-inf"><strong>From:</strong> {previousPage}</p>

                <p className="curr-inf"><strong>Current Page:</strong>Page 3</p>
            </div>
            <div className="page3-card">  {/* Ovo osigurava da sadržaj bude u okviru */}
                <h2>Indoor Positioning Systems</h2>
                <p>
                    <strong>Indoor positioning</strong> is used in <strong>hospitals, airports, and shopping malls</strong>, where 
                    GPS is unreliable. Methods include:
                </p>
                <ul>
                    <li><strong>WiFi Fingerprinting:</strong> Mapping signal strengths for localization.</li>
                    <li><strong>Bluetooth Beacons:</strong> Using low-energy Bluetooth signals.</li>
                    <li><strong>IMU Sensors:</strong> Tracking motion via accelerometers and gyroscopes.</li>
                </ul>

                <div className="nav-buttons">
                    <Link to="/" className="page1-btn" onClick={() => handleClick(0)}>Go to Access Page</Link>
                    <Link to="/page1" className="btn back-btn" onClick={() => handleClick(1)}>Go to Page 1</Link>
                    <Link to="/page2" className="btn" onClick={() => handleClick(2)}>Back to HMM in Positioning</Link>
                    <Link to="/page4" className="btn back-btn" onClick={() => handleClick(4)}>Next: Outdoor Positioning Systems</Link>
                    <Link to="/statistics" className="access-btn access-stats-btn" onClick={() => {}}>View Statistics</Link>
                    <button className="access-btn access-quit-btn" onClick={handleQuit}>Leave/Quit</button>
                </div>
            </div>
        </div>
    );
}

export default Page3;
