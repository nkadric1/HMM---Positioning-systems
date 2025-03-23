class InterfaceHMM {
    constructor() {
      if (new.target === InterfaceHMM) {
        throw new Error("Cannot instantiate an interface directly");
      }
    }
  
    updateHMM(from, to) {
      throw new Error("Method 'updateHMM(from, to)' must be implemented.");
    }
  
    calculateProbabilities() {
      throw new Error("Method 'calculateProbabilities()' must be implemented.");
    }
  
    getMatrix() {
      throw new Error("Method 'getMatrix()' must be implemented.");
    }
  
    printMatrix() {
      throw new Error("Method 'printMatrix()' must be implemented.");
    }
  
    getRowSums() {
      throw new Error("Method 'getRowSums()' must be implemented.");
    }
  
    getColumnSums() {
      throw new Error("Method 'getColumnSums()' must be implemented.");
    }
  }
  
  export default InterfaceHMM;
  