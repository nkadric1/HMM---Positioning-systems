import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/AccessPage.css";
import HMM from "../../../server/models/HMM.js";

const pages = ["AccessPage", "Page1", "Page2", "Page3", "Page4"];
const hmm = new HMM(pages);

function AccessPage() {
  const navigate = useNavigate();
  const [previousPage, setPreviousPage] = useState("None");

  useEffect(() => {
    const currentPage = "AccessPage";
    const storedPrevPage = sessionStorage.getItem("previousPage");

    if (storedPrevPage && storedPrevPage !== currentPage) {
      setPreviousPage(storedPrevPage);
    }

    setTimeout(() => {
      sessionStorage.setItem("previousPage", currentPage);
    }, 200);
  }, []);

  const handleClick = (toIndex) => {
    sessionStorage.setItem("previousPage", "AccessPage");
    hmm.updateHMM(0, toIndex);
  };
  const handleQuit = () => {
    alert("You have left the system.");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <div className="access-page-info">
        <div className="page-info-box">
          <strong>From: </strong>&nbsp;{previousPage}
        </div>
        <div className="page-info-box">
          <strong>Current Page: </strong>&nbsp;Access Page
        </div>
      </div>

      <div className="access-page-container">
        <div className="groupall">
          <h1
            className="access-title page-title"
            onClick={() => handleClick(0)}
          >
            Access Page
          </h1>

          <div className="access-nav-buttons">
            <Link
              to="/page1"
              className="access-btn"
              onClick={() => handleClick(1)}
            >
              Go to Page 1
            </Link>

            <Link
              to="/page2"
              className="access-btn"
              onClick={() => handleClick(2)}
            >
              Go to Page 2
            </Link>

            <Link
              to="/page3"
              className="access-btn"
              onClick={() => handleClick(3)}
            >
              Go to Page 3
            </Link>

            <Link
              to="/page4"
              className="access-btn"
              onClick={() => handleClick(4)}
            >
              Go to Page 4
            </Link>

            <Link to="/statistics" className="access-btn access-stats-btn">
              View Statistics
            </Link>

            <button className="access-btn access-quit-btn" onClick={handleQuit}>
              Leave/Quit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessPage;
