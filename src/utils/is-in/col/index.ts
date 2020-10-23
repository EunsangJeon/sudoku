import { Grid, SudokuNumber } from 'typings';

interface IInput {
  col: number;
  grid: Grid;
  value: SudokuNumber;
}

/**
 * A function input returns true if the value is already being used in the current grid col
 * @param input An object with 9 * 9 Sudoku Grid, col index and value to check
 */
function isInCol({ col, grid, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) {
      return true;
    }
  }
  return false;
}

export default isInCol;
