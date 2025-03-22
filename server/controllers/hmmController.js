import HMM from "../models/HMM.js";

const pages = ["AccessPage", "Page1", "Page2", "Page3", "Page4"];

const hmm = new HMM(pages);

export const updateHMM = (req, res) => {
    const { from, to } = req.body;

    const fromIndex = pages.indexOf(from);
    const toIndex = pages.indexOf(to);

    if (fromIndex === -1 || toIndex === -1) {
        return res.status(400).json({ error: "Invalid page names received" });
    }

    hmm.updateHMM(fromIndex, toIndex);

    return res.status(200).json({
        message: `HMM updated: ${from} → ${to}`,
        matrix: hmm.getMatrix()
    });
};

export const getProbabilities = (req, res) => {
    return res.status(200).json(hmm.getProbabilities());
};

export const getMatrix = (req, res) => {
    return res.status(200).json(hmm.getMatrix());
};

