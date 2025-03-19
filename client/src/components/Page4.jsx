import axios from "axios";
import { Link } from "react-router-dom";

function Page4() {
    const navigateTo = async (nextPage) => {
        try {
            await axios.post("http://localhost:8080/hmm/update", {
                from: "Page4",
                to: nextPage,
            });
        } catch (error) {
            console.error("Error updating HMM:", error);
        }
    };

    return (
        <div>
            <h1>Page 4</h1>
            <p>You are on Page 4. Choose where to go next:</p>
            <ul>
                <li>
                    <Link to="/page2" onClick={() => navigateTo("Page2")}>Go to Page 2</Link>
                </li>
                <li>
                    <Link to="/page3" onClick={() => navigateTo("Page3")}>Go to Page 3</Link>
                </li>
                <li>
                    <Link to="/" onClick={() => navigateTo("AccessPage")}>Back to Access Page</Link>
                </li>
            </ul>
        </div>
    );
}

export default Page4;
