import Cell from "./Cell.js";
import InterfaceHMM from "./InterfaceHMM.js";

class HMM extends InterfaceHMM {
  constructor(pages) {
    super();

    if (!HMM.instance) {
      this.pages = pages;
      this.transitionMatrix = [];
      this.sums_rows = Array(pages.length).fill(0);
      this.sums_columns = Array(pages.length).fill(0);

      for (let i = 0; i < pages.length; i++) {
        this.transitionMatrix[i] = [];
        for (let j = 0; j < pages.length; j++) {
          this.transitionMatrix[i][j] = new Cell();
        }
      }

      HMM.instance = this;
    }

    return HMM.instance;
  }

  updateHMM(from, to) {
    this.transitionMatrix[from][to].updateTransition(to);

    this.sums_rows[from] += 1;
    this.sums_columns[to] += 1;
    this.calculateProbabilities();
    this.printMatrix();
  }

  calculateProbabilities() {
    for (let i = 0; i < this.pages.length; i++) {
      for (let j = 0; j < this.pages.length; j++) {
        const cell = this.transitionMatrix[i][j];
        const sum_row = this.sums_rows[i];
        const sum_column = this.sums_columns[j];
        cell.calculateProbabilities(sum_row, sum_column);
      }
    }
  }
  

  getMatrix() {
    return this.transitionMatrix;
  }

  printMatrix() {
    let header = "            ";
    for (let j = 0; j < this.pages.length; j++) {
      header += `${this.pages[j].padEnd(28)} `;
    }

    for (let i = 0; i < this.pages.length; i++) {
      let rowStr = `From ${this.pages[i].padEnd(8)} (sum_row=${
        this.sums_rows[i] ?? 0
      }):`;

      for (let j = 0; j < this.pages.length; j++) {
        const cell = this.transitionMatrix[i][j];
        rowStr += ` [nb=${cell.nb}, prev=${cell.previous.toFixed(
          2
        )}, next=${cell.next.toFixed(2)}]`;
      }

    }

    let sumStr = "\nsum_column:  ";
    for (let j = 0; j < this.pages.length; j++) {
      sumStr += `${String(this.sums_columns[j] ?? 0).padEnd(28)} `;
    }
  }

  getRowSums() {
    return this.sums_rows;
  }

  getColumnSums() {
    return this.sums_columns;
  }
}

export default HMM;
