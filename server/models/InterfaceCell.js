class InterfaceCell {
    constructor() {
        if (new.target === InterfaceCell) {
            throw new Error("Cannot instantiate an interface directly");
        }
    }

    updateTransition(from, to) {
        throw new Error("Method must be implemented.");
    }

    calculateProbabilities() {
        throw new Error("Method must be implemented.");
    }
}

export default InterfaceCell;
