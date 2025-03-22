import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Page2.css";
import HMM from "../../../server/models/HMM.js";

const pages = ["Access Page", "Page1", "Page2", "Page3", "Page4"];
const hmm = new HMM(pages);

function Page2() {
    const navigate = useNavigate();
    const [previousPage, setPreviousPage] = useState("None");

    useEffect(() => {
        const storedPrevPage = sessionStorage.getItem("previousPage");
        if (storedPrevPage) {
            setPreviousPage(storedPrevPage);
        }
    }, []);

    const handleClick = (toIndex) => {
        sessionStorage.setItem("previousPage", "Page2"); 
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
                <div className="page-info-box">
                    <strong>From: </strong>&nbsp;{previousPage}
                </div>
                <div className="page-info-box">
                    <strong>Current Page: </strong>&nbsp;Page 2
                </div>
            </div>

            <div className="page2-card">
                <h2 onClick={() => handleClick(2)}>HMM in Positioning Systems</h2>
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
    <Link to="/" className="btn" onClick={() => handleClick(0)}>Access Page</Link>
    <Link to="/page1" className="btn" onClick={() => handleClick(1)}>HMM Introduction</Link>
    <Link to="/page3" className="btn" onClick={() => handleClick(3)}>Indoor Positioning Systems</Link>
    <Link to="/page4" className="btn" onClick={() => handleClick(4)}>Outdoor Positioning Systems</Link>
    
    <Link to="/statistics" className="stats-btn" onClick={() => {}}>View Statistics</Link>

    <button className="access-btn access-quit-btn" onClick={handleQuit}>Leave/Quit</button>
</div>

            </div>
        </div>
    );
}

export default Page2;
