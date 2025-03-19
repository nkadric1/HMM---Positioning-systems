class InterfaceCell {
    constructor() {
        if (new.target === InterfaceCell) {
            throw new Error("Cannot instantiate an interface directly");
        }
    }

    updateTransition(from, to) {
        throw new Error("Method 'updateTransition' must be implemented.");
    }

    calculateProbabilities() {
        throw new Error("Method 'calculateProbabilities' must be implemented.");
    }
}

export default InterfaceCell;
