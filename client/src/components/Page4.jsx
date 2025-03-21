import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "../styles/Page4.css";  // Import CSS file
import HMM from "../../../server/models/HMM.js"

const pages = ["Access Page", "Page1", "Page2", "Page3", "Page4"];
const hmm = new HMM(pages); // Initialize HMM with pages

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
           sessionStorage.setItem("previousPage", "Page4"); // ✅ set BEFORE navigating
           hmm.updateHMM(4, toIndex);
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

                <p className="curr-inf"><strong>Current Page:</strong>Page 4</p>
            </div>
            <div className="page4-card">  {/* Ovaj kontejner osigurava isti stil kao Page1-3 */}
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

                <div className="nav-buttons">
                    <Link to="/" className="page1-btn" onClick={() => handleClick(0)}>Go to Access Page</Link>
                    <Link to="/page1" className="btn back-btn" onClick={() => handleClick(1)}>Go to Page 1</Link>
                    <Link to="/page2" className="btn" onClick={() => handleClick(2)}>Go to Page 2</Link>
                    <Link to="/page3" className="btn back-btn" onClick={() => handleClick(3)}>Back to Indoor Positioning</Link>
                    <Link to="/statistics" className="access-btn access-stats-btn" onClick={() => {}}>View Statistics</Link>
                    <button className="access-btn access-quit-btn" onClick={handleQuit}>Leave/Quit</button>
                </div>
            </div>
        </div>
    );
}

export default Page4;
