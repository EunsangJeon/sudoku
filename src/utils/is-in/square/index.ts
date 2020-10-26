import { Square, SudokuNumber } from 'typings';

interface IInput {
  square: Square;
  value: SudokuNumber;
}

/**
 * function that checks if a number is in grid square or not and returns boolean
 * @param input sudoku square and value to check
 */
function isInSquare({ square, value }: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;
