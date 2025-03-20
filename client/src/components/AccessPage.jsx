import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/AccessPage.css";  // Import the updated CSS

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
                <button className="access-btn" onClick={() => navigateTo("Page1")}>Go to Page 1</button>
                <button className="access-btn" onClick={() => navigateTo("Page2")}>Go to Page 2</button>
                <button className="access-btn" onClick={() => navigateTo("Page3")}>Go to Page 3</button>
                <button className="access-btn" onClick={() => navigateTo("Page4")}>Go to Page 4</button>
                <button className="access-btn access-stats-btn" onClick={() => navigateTo("Statistics")}>View Statistics</button>
                <button className="access-btn access-quit-btn" onClick={handleQuit}>Leave/Quit</button>
            </div>
        </div>
    );
}

export default AccessPage;
