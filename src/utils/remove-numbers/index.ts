import { Grid } from 'typings';
import { copyGrid, getRandomIndex, solveGrid } from 'utils';
import global from 'global';

/**
 * Removes numbers from a full grid to create a Sudoku puzzle.
 * @param grid 9 * 9 Sudoku grid
 * @param attempts Number of attemts to solve (higher means more difficult, default: 5)
 */
function removeNumbers(grid: Grid, attempts = 5) {
  while (attempts > 0) {
    let row = 0;
    let col = 0;

    do {
      row = getRandomIndex();
      col = getRandomIndex();
    } while (grid[row][col] === 0);

    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = copyGrid(grid);
    global.counter = 0;

    solveGrid(gridCopy);

    if (global.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
  }

  return grid;
}

export default removeNumbers;
