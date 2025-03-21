import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Page2.css";
import HMM from "../../../server/models/HMM.js"

const pages = ["Access Page", "Page1", "Page2", "Page3", "Page4"];
const hmm = new HMM(pages);

function Page2() {
    const location = useLocation();
    const navigate = useNavigate();
    const [previousPage, setPreviousPage] = useState("None");

    useEffect(() => {
        const storedPrevPage = sessionStorage.getItem("previousPage");
        if (storedPrevPage) {
            setPreviousPage(storedPrevPage);
        }
    }, []);

    const handleClick = (toIndex) => {
        sessionStorage.setItem("previousPage", "Page2"); // ✅ set BEFORE navigating
        hmm.updateHMM(2, toIndex);
    };

    const handleQuit = () => {
        alert("You have left the system.");
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <div className="page-container">
            <div className="access-page-info">
                <p className="from-inf"><strong>From:</strong> {previousPage}</p>
                <p className="curr-inf"><strong>Current Page:</strong> Page 2</p>
            </div>

            <div className="page2-card">
                <h2>HMM in Positioning Systems</h2>
                <p>
                    <strong>Positioning systems</strong> determine a user's location based on 
                    <strong> sensor data, signal strength, and movement patterns</strong>. 
                    HMMs enhance <strong>indoor positioning</strong> where GPS is unreliable.
                </p>
                <p>HMMs are used in:</p>
                <ul>
                    <li><strong>Indoor Positioning:</strong> WiFi fingerprinting, Bluetooth, and sensor fusion.</li>
                    <li><strong>Outdoor Navigation:</strong> Predicting movement in GPS-based systems.</li>
                    <li><strong>Traffic Prediction:</strong> Modeling human mobility patterns in smart cities.</li>
                </ul>

                <div className="nav-buttons">
                    <Link to="/" className="page1-btn" onClick={() => handleClick(0)}>Go to Access Page</Link>
                    <Link to="/page1" className="btn back-btn" onClick={() => handleClick(1)}>Back to HMM Introduction</Link>
                    <Link to="/page3" className="btn" onClick={() => handleClick(3)}>Next: Indoor Positioning Systems</Link>
                    <Link to="/page4" className="access-btn" onClick={() => handleClick(4)}>Go to Page 4</Link>
                    <Link to="/statistics" className="access-btn access-stats-btn" onClick={() => {}}>View Statistics</Link>
                    <button className="access-btn access-quit-btn" onClick={handleQuit}>Leave/Quit</button>
                </div>
            </div>
        </div>
    );
}

export default Page2;
