import HMM from "../models/HMM.js";

const pages = ["AccessPage", "Page1", "Page2", "Page3", "Page4"];
const hmm = new HMM(pages);

export const updateHMM = (req, res) => {
    const { from, to } = req.body;
    if (!from || !to) {
        return res.status(400).json({ error: "Missing parameters" });
    }

    hmm.updateHMM(from, to);
    res.json({ message: "HMM Updated", probabilities: hmm.getProbabilities() });
};

export const getProbabilities = (req, res) => {
    res.json(hmm.getProbabilities());
};

export const getMatrix = (req, res) => {
    res.json(hmm.getMatrix());
};
