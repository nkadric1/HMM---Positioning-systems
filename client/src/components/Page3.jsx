import axios from "axios";
import { Link } from "react-router-dom";

function Page3() {
    const navigateTo = async (nextPage) => {
        try {
            await axios.post("http://localhost:8080/hmm/update", {
                from: "Page3",
                to: nextPage,
            });
        } catch (error) {
            console.error("Error updating HMM:", error);
        }
    };

    return (
        <div>
            <h1>Page 3</h1>
            <p>You are on Page 3. Choose where to go next:</p>
            <ul>
                <li>
                    <Link to="/page2" onClick={() => navigateTo("Page2")}>Go to Page 2</Link>
                </li>
                <li>
                    <Link to="/page4" onClick={() => navigateTo("Page4")}>Go to Page 4</Link>
                </li>
                <li>
                    <Link to="/" onClick={() => navigateTo("AccessPage")}>Back to Access Page</Link>
                </li>
            </ul>
        </div>
    );
}

export default Page3;
