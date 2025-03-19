import Cell from "./Cell.js";

class HMM {
    constructor(pages) {
        this.pages = pages;
        this.transitionMatrix = {};

        // Initialize matrix
        for (let page of pages) {
            this.transitionMatrix[page] = new Cell();
        }
    }

    updateHMM(from, to) {
        if (this.transitionMatrix[from]) {
            this.transitionMatrix[from].updateTransition(to);
        }
    }

    getProbabilities() {
        let probabilities = {};
        for (let page in this.transitionMatrix) {
            probabilities[page] = this.transitionMatrix[page].calculateProbabilities();
        }
        return probabilities;
    }

    getMatrix() {
        return this.transitionMatrix;
    }
}

export default HMM;
