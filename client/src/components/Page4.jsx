import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Page4.css";  
import HMM from "../../../server/models/HMM.js"

const pages = ["Access Page", "Page1", "Page2", "Page3", "Page4"];
const hmm = new HMM(pages); 

function Page4() {
    const location = useLocation();
    const [previousPage, setPreviousPage] = useState("None");

    useEffect(() => {
        const storedPrevPage = sessionStorage.getItem("previousPage");
        if (storedPrevPage) {
            setPreviousPage(storedPrevPage);
        }
    }, []);

    const handleClick = (toIndex) => {
        sessionStorage.setItem("previousPage", "Page4");
        hmm.updateHMM(4, toIndex);
    };

    const handleQuit = () => {
        alert("You have left the system.");
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <div className="page-container">
            {/* ✅ Wrapper Ensuring 100px Gap */}
            <div className="access-page-info">
                <div className="page-info-box">
                    <strong>From:</strong> {previousPage}
                </div>
                <div className="page-info-box">
                    <strong>Current Page:</strong> Page 4
                </div>
            </div>

            {/* ✅ Page Content */}
            <div className="page4-card">  
                <h2>Outdoor Positioning Systems</h2>
                <p>
                    <strong>Outdoor positioning</strong> relies on <strong>GPS, cellular networks, and satellite systems</strong>.
                    Common methods include:
                </p>
                <ul>
                    <li><strong>GPS Navigation:</strong> Used in Google Maps, self-driving cars.</li>
                    <li><strong>Cell Tower Triangulation:</strong> Positioning based on signal strength.</li>
                    <li><strong>Satellite-based Augmentation:</strong> High-precision navigation.</li>
                </ul>

                <p>
                    These methods combined with <strong>HMMs</strong> improve <strong>route prediction and navigation accuracy</strong>.
                </p>

                {/* ✅ Aligned Buttons */}
                <div className="nav-buttons">
    
    <Link to="/" className="btn" onClick={() => handleClick(0)}>Access Page</Link>
    <Link to="/page1" className="btn" onClick={() => handleClick(1)}>HMM Introduction</Link>
    <Link to="/page2" className="btn" onClick={() => handleClick(2)}>HMM In Positioning</Link>
    <Link to="/page3" className="btn" onClick={() => handleClick(3)}>Indoor Positioning Systems</Link>
    
    {/* ✅ Statistics should be brown */}
    <Link to="/statistics" className="stats-btn" onClick={() => {}}>View Statistics</Link>

    {/* ✅ Quit button stays red */}
    <button className="access-btn access-quit-btn" onClick={handleQuit}>Leave/Quit</button>
</div>
            </div>
        </div>
    );
}

export default Page4;
