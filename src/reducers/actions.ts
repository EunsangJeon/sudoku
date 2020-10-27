import { Action, AnyAction } from 'redux';

import { BlockCoords } from 'typings';

import * as types from './types';

export const createGrid = (): Action => ({ type: types.CREATE_GRID });

export const selectBlock = (coords: BlockCoords): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
});
