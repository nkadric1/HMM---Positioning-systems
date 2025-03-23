import InterfaceCell from "./InterfaceCell.js";

class Cell extends InterfaceCell {
  constructor() {
    super();
    this.nb = 0;
    this.previous = 0;
    this.next = 0;
  }

  updateTransition(to) {
    if (to) {
      this.nb++;
    }
  }

  calculateProbabilities(sum_row, sum_column) {
    if (sum_row > 0) {
      this.previous = this.nb / sum_row;
    } else {
      this.previous = 0;
    }
  
    if (sum_column > 0) {
      this.next = this.nb / sum_column;
    } else {
      this.next = 0;
    }
  }
  
}

export default Cell;
