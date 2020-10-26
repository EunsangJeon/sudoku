import { Grid } from 'typings';

/**
 * A function to check if the grid is full
 * @param grid a 9 * 9 sudoku grid
 */
function checkGrid(grid: Grid): boolean {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

export default checkGrid;
