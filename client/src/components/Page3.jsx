import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function Page3() {
    const location = useLocation();

    const navigateTo = async (nextPage) => {
        try {
            await axios.post("http://localhost:8080/hmm/update", {
                from: location.pathname.replace("/", "") || "Page3",
                to: nextPage,
            });
        } catch (error) {
            console.error("Error updating HMM:", error);
        }
    };

    return (
        <div className="page-container">
            <h2>Indoor Positioning Systems</h2>
            <p>
                **Indoor positioning** is used in **hospitals, airports, and shopping malls**, where 
                GPS is unreliable. Methods include:
            </p>
            <ul>
                <li><strong>WiFi Fingerprinting:</strong> Mapping signal strengths for localization.</li>
                <li><strong>Bluetooth Beacons:</strong> Using low-energy Bluetooth signals.</li>
                <li><strong>IMU Sensors:</strong> Tracking motion via accelerometers and gyroscopes.</li>
            </ul>

            <div className="nav-buttons">
                <Link to="/page4" className="btn" onClick={() => navigateTo("Page4")}>Next: Outdoor Positioning Systems</Link>
                <Link to="/page2" className="btn back-btn" onClick={() => navigateTo("Page2")}>Back to HMM in Positioning</Link>
            </div>
        </div>
    );
}

export default Page3;
