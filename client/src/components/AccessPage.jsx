import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/AccessPage.css";  // Import the new CSS file

function AccessPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [previousPage, setPreviousPage] = useState("None");  // Track previous page

    useEffect(() => {
        const storedPrevPage = sessionStorage.getItem("previousPage");
        if (storedPrevPage) {
            setPreviousPage(storedPrevPage);
        }
        sessionStorage.setItem("previousPage", "Access Page");
    }, []);

    const navigateTo = async (nextPage) => {
        try {
            await axios.post("http://localhost:8080/hmm/update", {
                from: "Access Page",
                to: nextPage,
            });
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
            {/* Top Right: Current Page Indicator */}
            <div className="access-page-info">
                <p><strong>Current Page:</strong> Access Page</p>
                <p><strong>From:</strong> {previousPage}</p>
            </div>

            <h2>Welcome to the Access Page</h2>
            <p>Select a page to navigate:</p>

            {/* Navigation Menu */}
            <div className="access-nav-section">
                <p><strong>To:</strong></p>
                <div className="access-nav-buttons">
                    <button className="access-btn" onClick={() => navigateTo("Page1")}>Go to Page 1</button>
                    <button className="access-btn" onClick={() => navigateTo("Page2")}>Go to Page 2</button>
                    <button className="access-btn" onClick={() => navigateTo("Page3")}>Go to Page 3</button>
                    <button className="access-btn" onClick={() => navigateTo("Page4")}>Go to Page 4</button>
                    <button className="access-btn access-stats-btn" onClick={() => navigateTo("Statistics")}>View Statistics</button>
                </div>
                <button className="access-btn access-quit-btn" onClick={handleQuit}>Leave/Quit</button>
            </div>
        </div>
    );
}

export default AccessPage;
