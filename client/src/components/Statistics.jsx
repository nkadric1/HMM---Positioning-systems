import axios from "axios";
import { useEffect, useState } from "react";

function Statistics() {
    const [hmmData, setHmmData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/hmm/probabilities");
                setHmmData(response.data);
            } catch (error) {
                console.error("Error fetching statistics:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="page-container">
            <h2>Navigation Statistics</h2>
            {hmmData ? (
                <pre>{JSON.stringify(hmmData, null, 2)}</pre>
            ) : (
                <p>Loading statistics...</p>
            )}
        </div>
    );
}

export default Statistics;
