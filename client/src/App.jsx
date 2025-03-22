import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AccessPage from "./components/AccessPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Statistics from "./components/Statistics";
import HMM from "../../server/models/HMM.js";

const pages = ["Access Page", "Page1", "Page2", "Page3", "Page4", "Statistics"];
const hmm = new HMM(pages);
function Navigation() {
    return (
        <nav className="top-nav">
            <h1>Hidden Markov Model Navigation</h1>
        </nav>
    );
}

function App() {
    return (
        <Router>
            <div className="container">
                <Navigation />
                <Routes>
                <Route path="/" element={<AccessPage hmm={hmm} />} />
                <Route path="/page1" element={<Page1 hmm={hmm} />} />
                <Route path="/page2" element={<Page2 hmm={hmm} />} />
                <Route path="/page3" element={<Page3 hmm={hmm} />} />
                <Route path="/page4" element={<Page4 hmm={hmm} />} />
                <Route path="/statistics" element={<Statistics hmm={hmm} />} />
            </Routes>
            </div>
        </Router>
    );
}

export default App;
