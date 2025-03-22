import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Statistics.css";

function Statistics({ hmm }) {
    const [matrix, setMatrix] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const updateMatrix = () => {
            hmm.calculateProbabilities();  // Ensure probabilities are updated
            setMatrix([...hmm.getMatrix()]);
        };

        updateMatrix();
        const interval = setInterval(updateMatrix, 1000);
        return () => clearInterval(interval);
    }, [hmm]);

    const handleBack = () => {
        const prev = sessionStorage.getItem("previousPage");
        if (prev) {
            if(prev==="AccessPage")
            {
                navigate(`/`);
            }
            else{
                navigate(`/${prev.toLowerCase().replace(" ", "")}`);
            }
        }
    };

    const handleQuit = () => {
        alert("You have left the system.");
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <div className="statistics-container">
            <h2>Hidden Markov Model Statistics</h2>
            <div className="table-wrapper">
                <table className="statistics-table">
                    <thead>
                        <tr>
                            <th>From \ To</th>
                            {hmm.pages.map((page, index) => (
                                <th key={index}>{page}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {matrix.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td className="row-header">{hmm.pages[rowIndex]}</td>
                                {row.map((cell, colIndex) => (
                                    <td key={colIndex}>
                                        <strong>nb:</strong> {cell.nb} <br />
                                        <strong>prev:</strong> {cell.previous.toFixed(2)} <br />
                                        <strong>next:</strong> {cell.next.toFixed(2)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="nav-buttons">
                <button className="access-btn" onClick={handleBack}>⬅ Back to Previous Page</button>
                <button className="access-btn access-quit-btn" onClick={handleQuit}>Leave/Quit</button>
            </div>
        </div>
    );
}

export default Statistics;
