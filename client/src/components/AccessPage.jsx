import axios from "axios";
import { Link } from "react-router-dom";

function AccessPage() {
    const navigateTo = async (nextPage) => {
        try {
            await axios.post("http://localhost:8080/hmm/update", {
                from: "AccessPage",
                to: nextPage,
            });
        } catch (error) {
            console.error("Error updating HMM:", error);
        }
    };

    return (
        <div>
            <h1>Access Page</h1>
            <p>Select a page to navigate:</p>
            <ul>
                <li>
                    <Link to="/page1" onClick={() => navigateTo("Page1")}>Go to Page 1</Link>
                </li>
                <li>
                    <Link to="/page2" onClick={() => navigateTo("Page2")}>Go to Page 2</Link>
                </li>
                <li>
                    <Link to="/page3" onClick={() => navigateTo("Page3")}>Go to Page 3</Link>
                </li>
                <li>
                    <Link to="/page4" onClick={() => navigateTo("Page4")}>Go to Page 4</Link>
                </li>
                <li>
                    <Link to="/statistics">View Statistics</Link>
                </li>
            </ul>
        </div>
    );
}

export default AccessPage;
