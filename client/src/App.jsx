import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import AccessPage from "./components/AccessPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Statistics from "./components/Statistics";

function Navigation() {
    const location = useLocation();
    return (
        <nav>
            <h1>Hidden Markov Model Navigation</h1>
            <ul>
                <li><Link to="/">Access Page</Link></li>
                <li><Link to="/page1">Page 1</Link></li>
                <li><Link to="/page2">Page 2</Link></li>
                <li><Link to="/page3">Page 3</Link></li>
                <li><Link to="/page4">Page 4</Link></li>
                <li><Link to="/statistics">Statistics</Link></li>
            </ul>
            <p><strong>Current Page:</strong> {location.pathname.replace("/", "") || "Access Page"}</p>
        </nav>
    );
}

function App() {
    return (
        <Router>
            <div className="container">
                <Navigation />
                <Routes>
                    <Route path="/" element={<AccessPage />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />
                    <Route path="/statistics" element={<Statistics />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
