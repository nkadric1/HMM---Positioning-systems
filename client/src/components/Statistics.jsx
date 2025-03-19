import { useEffect, useState } from "react";
import axios from "axios";

function Statistics() {
    const [probabilities, setProbabilities] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8080/hmm/probabilities")
            .then(response => setProbabilities(response.data));
    }, []);

    return (
        <div>
            <h1>HMM Transition Probabilities</h1>
            <pre>{JSON.stringify(probabilities, null, 2)}</pre>
        </div>
    );
}

export default Statistics;
