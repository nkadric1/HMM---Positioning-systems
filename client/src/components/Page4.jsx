import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Page4.css";
import HMM from "../../../server/models/HMM.js";

const pages = ["AccessPage", "Page1", "Page2", "Page3", "Page4"];
const hmm = new HMM(pages);

function Page4() {
  const navigate = useNavigate();
  const [previousPage, setPreviousPage] = useState("None");

  useEffect(() => {
    const storedPrevPage = sessionStorage.getItem("previousPage");
    if (storedPrevPage) {
      setPreviousPage(storedPrevPage);
    }
  }, []);

  const handleClick = (toIndex) => {
    sessionStorage.setItem("previousPage", "Page4");
    hmm.updateHMM(4, toIndex);
  };

  const handleQuit = () => {
    alert("You have left the system.");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="page-container">
      <div className="access-page-info">
        <div className="page-info-box">
          <strong>From:</strong>&nbsp;{previousPage}
        </div>
        <div className="page-info-box">
          <strong>Current Page:</strong>&nbsp;Page 4
        </div>
      </div>

      <div className="page4-card">
        <h2 className="page-title" onClick={() => handleClick(4)}>
          Outdoor Positioning Systems (Page 4)
        </h2>
        <p>
          <strong>Outdoor positioning</strong> relies on{" "}
          <strong>GPS, cellular networks, and satellite systems</strong>. Common
          methods include:
        </p>
        <ul>
          <li>
            <strong>GPS Navigation:</strong> Used in Google Maps, self-driving
            cars.
          </li>
          <li>
            <strong>Cell Tower Triangulation:</strong> Positioning based on
            signal strength.
          </li>
          <li>
            <strong>Satellite-based Augmentation:</strong> High-precision
            navigation.
          </li>
        </ul>

        <p>
          These methods combined with <strong>HMMs</strong> improve{" "}
          <strong>route prediction and navigation accuracy</strong>.
        </p>

        <div className="nav-buttons">
          <Link to="/" className="btn" onClick={() => handleClick(0)}>
            Access Page
          </Link>
          <Link to="/page1" className="btn" onClick={() => handleClick(1)}>
            Page 1
          </Link>
          <Link to="/page2" className="btn" onClick={() => handleClick(2)}>
            Page 2
          </Link>
          <Link to="/page3" className="btn" onClick={() => handleClick(3)}>
            Page 3
          </Link>

          <Link to="/statistics" className="stats-btn" onClick={() => {}}>
            View Statistics
          </Link>

          <button className="access-btn access-quit-btn" onClick={handleQuit}>
            Leave/Quit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page4;
