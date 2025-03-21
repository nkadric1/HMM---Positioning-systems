import Cell from "./Cell.js";

class HMM {
    constructor(pages) {
        this.pages = pages;
        this.transitionMatrix = [];
        this.sums_rows = Array(pages.length).fill(0); // Initialize with zeros
        this.sums_columns = Array(pages.length).fill(0); // Initialize with zeros

        // Initialize matrix with Cell objects
        for (let i = 0; i < pages.length; i++) {
            this.transitionMatrix[i] = [];
            for (let j = 0; j < pages.length; j++) {
                this.transitionMatrix[i][j] = new Cell(); // Initialize each cell
            }
        }
    }

    updateHMM(from, to) { // i = row, j = column
       

        console.log("from u funkciji i to u funckiji", from, to);
        console.log("nb u matrici", this.transitionMatrix[from][to].nb
        )
            this.transitionMatrix[from][to].nb += 1;

            // Update row and column sums
            this.sums_rows[from] += 1;
            this.sums_columns[to] += 1;

            // Recalculate probabilities
            this.calculateProbabilities();

            // Print updated transition matrix
            console.log("Updated Transition Matrix:");
            this.printMatrix();
        
    }

    calculateProbabilities() {
        for (let i = 0; i < this.pages.length; i++) {
            for (let j = 0; j < this.pages.length; j++) {
                if (this.sums_rows[i] > 0) {  //provjeriti ove formule
                    this.transitionMatrix[i][j].previous = this.transitionMatrix[i][j].nb / this.sums_rows[i];
                }
                if (this.sums_columns[j] > 0) {
                    this.transitionMatrix[i][j].next = this.transitionMatrix[i][j].nb / this.sums_columns[j];
                }
            }
        }
    }

    
    getMatrix() {
        return this.transitionMatrix;
    }

    printMatrix() {
        console.log("\nTransition Matrix:");
    
        // Header row with TO page labels
        let header = "            ";
        for (let j = 0; j < this.pages.length; j++) {
            header += `${this.pages[j].padEnd(28)} `;
        }
        console.log(header);
    
        // Each row: From page, transition values
        for (let i = 0; i < this.pages.length; i++) {
            let rowStr = `From ${this.pages[i].padEnd(8)} (sum_row=${this.sums_rows[i] ?? 0}):`;
    
            for (let j = 0; j < this.pages.length; j++) {
                const cell = this.transitionMatrix[i][j];
                rowStr += ` [nb=${cell.nb}, prev=${cell.previous.toFixed(2)}, next=${cell.next.toFixed(2)}]`;
            }
    
            console.log(rowStr);
        }
    
        // Aligned column sums
        let sumStr = "\nsum_column:  ";
        for (let j = 0; j < this.pages.length; j++) {
            sumStr += `${String(this.sums_columns[j] ?? 0).padEnd(28)} `;
        }
        console.log(sumStr);
    }
    
    
    
}

export default HMM;
