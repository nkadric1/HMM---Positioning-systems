import Cell from "./Cell.js";

class HMM {
    constructor(pages) {
        this.pages = pages;
        this.transitionMatrix = {};
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
        console.log("Transition matrix", this.transitionMatrix
        )
        l
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
