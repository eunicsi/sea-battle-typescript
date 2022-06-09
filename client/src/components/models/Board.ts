import { Cell } from "./Cell";

export class Board {
    cells: Cell[][] = [];

    public initCells() {
        for (let i = 0; i < 10; i++) {
            const row: Cell[] = [];

            for (let j = 0; j < 10; j++) {
                row.push(new Cell(j, i));
            }

            this.cells.push(row);
        }
    }
}