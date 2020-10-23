import { Grid } from 'typings';

import isInRow from './';

describe('isInRow', () => {
  it('it returns true when value is in grid row', () => {
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

    expect(isInRow({ row: 0, grid, value: 1 })).toBeTruthy();
    expect(isInRow({ row: 4, grid, value: 5 })).toBeTruthy();
    expect(isInRow({ row: 8, grid, value: 9 })).toBeTruthy();
  });

  it('it returns true when value is not in grid row', () => {
    const grid: Grid = [
      [0, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 0, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 0],
    ];

    expect(isInRow({ row: 0, grid, value: 1 })).toBeFalsy();
    expect(isInRow({ row: 4, grid, value: 5 })).toBeFalsy();
    expect(isInRow({ row: 8, grid, value: 9 })).toBeFalsy();
  });
});
