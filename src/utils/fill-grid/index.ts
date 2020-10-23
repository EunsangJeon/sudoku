import { Grid, SudokuNumber } from 'typings';
import { isInCol, isInRow, shuffle } from 'utils';

const gridExample: Grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const numbers: SudokuNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking recursive function to check all the possible combinations of numbers until a solution is found
 * @param grid 9 * 9 sudoku grid
 */
function fillGrid(grid: Grid) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      shuffle(numbers);

      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ col, grid, value })) {
            // TODO test functions for row&col check
            // TODO square identification
            // TODO square check
            grid[row][col] = value;
          }
        }
      }

      break;
    }
  }

  grid[row][col] = 0;
}

export default fillGrid;
