import { Grid } from 'typings';

import isInCol from './';

describe('isInCol', () => {
  it('it returns true when value is in grid column', () => {
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

    expect(isInCol({ col: 0, grid, value: 1 })).toBeTruthy();
    expect(isInCol({ col: 4, grid, value: 5 })).toBeTruthy();
    expect(isInCol({ col: 8, grid, value: 9 })).toBeTruthy();
  });

  it('it returns false when value is not in grid column', () => {
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

    expect(isInCol({ col: 0, grid, value: 2 })).toBeFalsy();
    expect(isInCol({ col: 4, grid, value: 4 })).toBeFalsy();
    expect(isInCol({ col: 8, grid, value: 8 })).toBeFalsy();
  });
});
