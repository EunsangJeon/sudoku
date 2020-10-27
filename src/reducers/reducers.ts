import { AnyAction } from 'redux';

import { copyGrid, createFullGrid, removeNumbers } from 'utils';

import { IReducer } from './interfaces';
import * as types from './types';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid();
      const copyOfSolvedGrid = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(copyOfSolvedGrid);

      return {
        ...state,
        grid: challengeGrid,
      };

    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      };

    default:
      return state;
  }
}

export default reducer;
