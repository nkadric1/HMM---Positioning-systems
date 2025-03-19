import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function Page2() {
    const location = useLocation();

    const navigateTo = async (nextPage) => {
        try {
            await axios.post("http://localhost:8080/hmm/update", {
                from: location.pathname.replace("/", "") || "Page2",
                to: nextPage,
            });
        } catch (error) {
            console.error("Error updating HMM:", error);
        }
    };

    return (
        <div className="page-container">
            <h2>HMM in Positioning Systems</h2>
            <p>
                **Positioning systems** determine a user's location based on **sensor data, signal 
                strength, and movement patterns**. HMMs enhance **indoor positioning** where 
                GPS is unreliable.
            </p>
            <p>HMMs are used in:
                <ul>
                    <li>**Indoor Positioning:** WiFi fingerprinting, Bluetooth, and sensor fusion.</li>
                    <li>**Outdoor Navigation:** Predicting movement in GPS-based systems.</li>
                    <li>**Traffic Prediction:** Modeling human mobility patterns in smart cities.</li>
                </ul>
            </p>

            <div className="nav-buttons">
                <Link to="/page3" className="btn" onClick={() => navigateTo("Page3")}>Next: Indoor Positioning Systems</Link>
                <Link to="/page1" className="btn back-btn" onClick={() => navigateTo("Page1")}>Back to HMM Introduction</Link>
            </div>
        </div>
    );
}

export default Page2;
