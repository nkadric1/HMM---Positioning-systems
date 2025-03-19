import InterfaceCell from "./InterfaceCell.js";

class Cell extends InterfaceCell {
    constructor() {
        super();
        this.nb = 0; // Number of visits
        this.transitions = {}; // Tracks transitions to other pages
    }

    updateTransition(to) {
        if (!this.transitions[to]) {
            this.transitions[to] = 0;
        }
        this.transitions[to] += 1;
        this.nb += 1;
    }

    calculateProbabilities() {
        let probabilities = {};
        for (let page in this.transitions) {
            probabilities[page] = (this.transitions[page] / this.nb).toFixed(2);
        }
        return probabilities;
    }
}

export default Cell;
