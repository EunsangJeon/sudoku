import { Action, AnyAction } from 'redux';

import { BlockCoords, SudokuNumber } from 'typings';

import * as types from './types';

export const createGrid = (): Action => ({ type: types.CREATE_GRID });

export const fillBlock = (
  value: SudokuNumber,
  coords: BlockCoords
): AnyAction => ({
  coords,
  type: types.FILL_BLOCK,
  value,
});

export const selectBlock = (coords: BlockCoords): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
});
