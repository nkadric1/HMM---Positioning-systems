import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Page1.css";  // Import CSS file
import HMM from "../../../server/models/HMM.js"

const pages = ["AccessPage", "Page1", "Page2", "Page3", "Page4"];
const hmm = new HMM(pages); // Initialize HMM with pages

function Page1() {
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
        sessionStorage.setItem("previousPage", "Page1"); 
        hmm.updateHMM(1, toIndex);
    };
    const handleQuit = () => {
        alert("You have left the system.");
        sessionStorage.clear();
        navigate("/");
    };

    return (
        
        <div className="page1-wrapper">
                       {/* Current Page Info (Top Right) */}
            <div className="access-page-info">
    <div className="page-info-box">
        <strong>From: </strong>&nbsp;{previousPage}
    </div>
    <div className="page-info-box">
        <strong>Current Page: </strong>&nbsp;Page 1
    </div>
</div>

            <div className="page1-container">
                <h1 onClick={() => handleClick(1)}>Introduction to Hidden Markov Models</h1>
                <p>HMMs are used in various fields like speech recognition, positioning, and more.</p>
                <div className="buttons">
                    <Link to="/" className="page1-btn" onClick={() => handleClick(0)}>Access page</Link>
                    <Link to="/page2" className="page1-btn" onClick={() => handleClick(2)}>HMM in Positioning</Link>
                    <Link to="/page3" className="access-btn" onClick={() => handleClick(3)}>Indoor Positioning Systems</Link>
                    <Link to="/page4" className="access-btn" onClick={() => handleClick(4)}>Outdoor Positioning Systems</Link>
                    <Link to="/statistics" className="access-btn access-stats-btn" onClick={() => {}}>View Statistics</Link>
                    <button className="access-btn access-quit-btn" onClick={handleQuit}>Leave/Quit</button>
                </div>
            </div>
        </div>
    );
}

export default Page1;
