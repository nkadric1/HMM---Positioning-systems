import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AccessPage from "./components/AccessPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Statistics from "./components/Statistics";

function App() {
    const [hmmData, setHmmData] = useState({});

    const fetchHMMData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/hmm/probabilities");
            setHmmData(response.data);
        } catch (error) {
            console.error("Error fetching HMM data:", error);
        }
    };

    useEffect(() => {
        fetchHMMData();
    }, []);

    return (
        <Router>
            <div>
                <h1>Hidden Markov Model Navigation</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Access Page</Link></li>
                        <li><Link to="/Page1">Page 1</Link></li>
                        <li><Link to="/Page2">Page 2</Link></li>
                        <li><Link to="/Page3">Page 3</Link></li>
                        <li><Link to="/Page4">Page 4</Link></li>
                        <li><Link to="/statistics">Statistics</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<AccessPage />} />
                    <Route path="/Page1" element={<Page1 />} />
                    <Route path="/Page2" element={<Page2 />} />
                    <Route path="/Page3" element={<Page3 />} />
                    <Route path="/Page4" element={<Page4 />} />
                    <Route path="/Statistics" element={<Statistics hmmData={hmmData} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
