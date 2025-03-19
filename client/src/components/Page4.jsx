import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function Page4() {
    const location = useLocation();

    const navigateTo = async (nextPage) => {
        try {
            await axios.post("http://localhost:8080/hmm/update", {
                from: location.pathname.replace("/", "") || "Page4",
                to: nextPage,
            });
        } catch (error) {
            console.error("Error updating HMM:", error);
        }
    };

    return (
        <div className="page-container">
            <h2>Outdoor Positioning Systems</h2>
            <p>
                **Outdoor positioning** relies on **GPS, cellular networks, and satellite systems**.
                Common methods include:
            </p>
            <ul>
                <li><strong>GPS Navigation:</strong> Used in Google Maps, self-driving cars.</li>
                <li><strong>Cell Tower Triangulation:</strong> Positioning based on signal strength.</li>
                <li><strong>Satellite-based Augmentation:</strong> High-precision navigation.</li>
            </ul>

            <p>
                These methods combined with **HMMs** improve **route prediction and navigation accuracy**.
            </p>

            <div className="nav-buttons">
                <Link to="/statistics" className="btn stats-btn" onClick={() => navigateTo("Statistics")}>View Statistics</Link>
                <Link to="/page3" className="btn back-btn" onClick={() => navigateTo("Page3")}>Back to Indoor Positioning</Link>
            </div>
        </div>
    );
}

export default Page4;
