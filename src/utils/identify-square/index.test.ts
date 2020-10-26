import { Grid } from 'typings';

import identifySquare from './';

describe('identifySquare', () => {
  it('identifies the correct square with a given grid, row index and column index', () => {
    const grid: Grid = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ];

    expect(identifySquare({ grid, col: 2, row: 2 })).toStrictEqual([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ]);
    expect(identifySquare({ grid, col: 5, row: 5 })).toStrictEqual([
      [4, 5, 6],
      [4, 5, 6],
      [4, 5, 6],
    ]);
    expect(identifySquare({ grid, col: 8, row: 8 })).toStrictEqual([
      [7, 8, 9],
      [7, 8, 9],
      [7, 8, 9],
    ]);
  });
});
