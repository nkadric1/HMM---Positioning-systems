import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Page1.css";  // Import CSS file

function Page1() {
    const location = useLocation();
    const navigate = useNavigate();
    const [previousPage, setPreviousPage] = useState("None");

    useEffect(() => {
        const storedPrevPage = sessionStorage.getItem("previousPage");
        if (storedPrevPage) {
            setPreviousPage(storedPrevPage);
        }
        sessionStorage.setItem("previousPage", "Page 1");
    }, []);

    const navigateTo = async (nextPage) => {
        try {
            await axios.post("http://localhost:8080/hmm/update", {
                from: "Page 1",
                to: nextPage,
            });
            navigate(`/${nextPage.toLowerCase()}`);
        } catch (error) {
            console.error("Error updating HMM:", error);
        }
    };

    return (
        <div className="page1-container">
            <h2>Introduction to Hidden Markov Models</h2>
            <p>HMMs are used in various fields like speech recognition, positioning, and more.</p>

            <div>
                <button className="page1-btn" onClick={() => navigateTo("Page2")}>Next: HMM in Positioning</button>
                <button className="page1-btn" onClick={() => navigateTo("AccessPage")}>Back to Access Page</button>
            </div>
        </div>
    );
}

export default Page1;
