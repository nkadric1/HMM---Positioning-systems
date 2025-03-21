import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/AccessPage.css";  // Import the updated CSS
import HMM from "../../../server/models/HMM.js"

const pages = ["Access Page", "Page1", "Page2", "Page3", "Page4", "Statistics"];
const hmm = new HMM(pages); // Initialize HMM with pages

function AccessPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [previousPage, setPreviousPage] = useState("None");

    useEffect(() => {
        const storedPrevPage = sessionStorage.getItem("previousPage");
        if (storedPrevPage) {
            setPreviousPage(storedPrevPage);
        }
        sessionStorage.setItem("previousPage", "Access Page");
    }, []);

    const navigateTo = async (nextPage) => {
        try {
            // Find the index of the current and next page
            const fromIndex = pages.indexOf("Access Page"); // Index of current page (0)
            const toIndex = pages.indexOf(nextPage); // Index of the next page
            console.log("from", fromIndex);
            console.log("to", toIndex);
    
            // Update the HMM transition using indices
            hmm.updateHMM(fromIndex, toIndex);
    
            // Send the updated transition to the backend
            await axios.post("http://localhost:8080/hmm/update", {
                from: fromIndex,  // ✅ Send index instead of name
                to: toIndex,      // ✅ Send index instead of name
            });
    
            // Navigate to the selected page
            navigate(`/${nextPage.toLowerCase()}`);
        } catch (error) {
            console.error("Error updating HMM:", error);
        }
    };
    

    const handleQuit = () => {
        alert("You have left the system.");
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <div className="access-page-container">
            {/* Navigation Menu - Fixed at the Top */}
            <div className="access-nav-menu">
                <Link to="/">Access Page</Link>
                <Link to="/page1">Page 1</Link>
                <Link to="/page2">Page 2</Link>
                <Link to="/page3">Page 3</Link>
                <Link to="/page4">Page 4</Link>
                <Link to="/statistics">Statistics</Link>
            </div>

            {/* Current Page Info (Top Right) */}
            <div className="access-page-info">
                <p><strong>Current Page:</strong> Access Page</p>
                <p><strong>From:</strong> {previousPage}</p>
            </div>

            {/* Title Centered */}
            <h1 className="access-title">Access Page</h1>

            {/* Navigation Buttons - One Below Another */}
            <div className="access-nav-buttons">
            <div className="access-nav-buttons">
            <Link to="/page1" className="access-btn" onClick={() => hmm.updateHMM(0, 1)}>Go to Page 1</Link>
            <Link to="/page2" className="access-btn" onClick={() => hmm.updateHMM(0, 2)}>Go to Page 2</Link>
            <Link to="/page3" className="access-btn" onClick={() => hmm.updateHMM(0, 3)}>Go to Page 3</Link>
            <Link to="/page4" className="access-btn" onClick={() => hmm.updateHMM(0, 4)}>Go to Page 4</Link>
            <Link to="/statistics" className="access-btn access-stats-btn" onClick={() => hmm.updateHMM(0, 5)}>View Statistics</Link>
            <button className="access-btn access-quit-btn" onClick={handleQuit}>Leave/Quit</button>
            </div>

            </div>
        </div>
    );
}

export default AccessPage;
