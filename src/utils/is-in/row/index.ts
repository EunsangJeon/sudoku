import { Grid, SudokuNumber } from 'typings';

interface IInput {
  grid: Grid;
  row: number;
  value: SudokuNumber;
}

/**
 * A function input returns true if the value is already being used in the current grid row
 * @param input An object with 9 * 9 Sudoku Grid, row index and value to check
 */
function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value);
}

export default isInRow;
