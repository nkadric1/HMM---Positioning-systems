import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function Page1() {
    const location = useLocation();

    const navigateTo = async (nextPage) => {
        try {
            await axios.post("http://localhost:8080/hmm/update", {
                from: location.pathname.replace("/", "") || "Page1",
                to: nextPage,
            });
        } catch (error) {
            console.error("Error updating HMM:", error);
        }
    };

    return (
        <div className="page-container">
            <h2>Introduction to Hidden Markov Models</h2>
            <p>
                A **Hidden Markov Model (HMM)** is a statistical model that represents 
                a system with **hidden states** and observable outputs. It is widely used 
                in **speech recognition, biological sequence analysis, and positioning systems**.
            </p>
            <p>
                HMMs consist of:
                <ul>
                    <li><strong>States:</strong> Hidden variables representing different situations.</li>
                    <li><strong>Observations:</strong> Data we can measure.</li>
                    <li><strong>Transition Probabilities:</strong> The likelihood of moving between states.</li>
                </ul>
            </p>

            <p>
                In **positioning systems**, HMMs help model **movement patterns**, predicting 
                user transitions between locations based on previous data.
            </p>

            <div className="nav-buttons">
                <Link to="/page2" className="btn" onClick={() => navigateTo("Page2")}>Next: HMM in Positioning Systems</Link>
                <Link to="/" className="btn back-btn" onClick={() => navigateTo("AccessPage")}>Back to Access Page</Link>
            </div>
        </div>
    );
}

export default Page1;
