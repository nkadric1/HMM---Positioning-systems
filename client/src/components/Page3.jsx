import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Page3.css";
import HMM from "../../../server/models/HMM.js"

const pages = ["Access Page", "Page1", "Page2", "Page3", "Page4"];
const hmm = new HMM(pages);

function Page3() {
    const navigate = useNavigate();
    const [previousPage, setPreviousPage] = useState("None");

    useEffect(() => {
        const storedPrevPage = sessionStorage.getItem("previousPage");
        if (storedPrevPage) {
            setPreviousPage(storedPrevPage);
        }
    }, []);

    const handleClick = (toIndex) => {
        sessionStorage.setItem("previousPage", "Page3");
        hmm.updateHMM(3, toIndex);
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
                    <strong>From:</strong>&nbsp;{previousPage}
                </div>
                <div className="page-info-box">
                    <strong>Current Page:</strong>&nbsp;Page 3
                </div>
            </div>

            <div className="page3-card">
                <h2 onClick={() => handleClick(3)}>Indoor Positioning Systems</h2>
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

                    <Link to="/" className="btn" onClick={() => handleClick(0)}>Access Page</Link>
                    <Link to="/page1" className="btn" onClick={() => handleClick(1)}>HMM Introduction</Link>
                    <Link to="/page2" className="btn" onClick={() => handleClick(2)}>HMM In Positioning</Link>
                    <Link to="/page4" className="btn" onClick={() => handleClick(4)}>Outdoor Positioning Systems</Link>

                    <Link to="/statistics" className="stats-btn" onClick={() => { }}>View Statistics</Link>

                    <button className="access-btn access-quit-btn" onClick={handleQuit}>Leave/Quit</button>
                </div>
            </div>
        </div>

    );
}

export default Page3;
