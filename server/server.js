import express from "express";
import cors from "cors";
import hmmRoutes from "./routes/hmmRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/hmm", hmmRoutes);

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
