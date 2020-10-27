import { BlockCoords, Grid } from 'typings';

export interface IReducer {
  grid?: Grid;
  selectedBlock?: BlockCoords;
}
