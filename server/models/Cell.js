import InterfaceCell from "./InterfaceCell.js";

class Cell extends InterfaceCell {
    constructor() {
        super();
        this.nb = 0; // Number of visits
        this.previous = 0; // Tracks transitions to other pages
        this.next = 0;
    }

    updateTransition(to) { //to is j column
        console.log("transition is ", to)
        if (to) {
            this.nb++;
            
        }
        
        console.log("number is ", this.nb)

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
