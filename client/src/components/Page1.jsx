import axios from "axios";

function Page1() {
    const navigateTo = async (nextPage) => {
        await axios.post("http://localhost:8080/hmm/update", {
            from: "Page1",
            to: nextPage,
        });
    };

    return (
        <div>
            <h1>Page 1</h1>
            <button onClick={() => navigateTo("Page2")}>Go to Page 2</button>
            <button onClick={() => navigateTo("Page3")}>Go to Page 3</button>
            <button onClick={() => navigateTo("Page4")}>Go to Page 4</button>
            <button onClick={() => navigateTo("AccessPage")}>Back to Access Page</button>
        </div>
    );
}

export default Page1;
