import { BlockCoords, Grid } from 'typings';

export interface IReducer {
  challengeGrid?: Grid;
  selectedBlock?: BlockCoords;
  solvedGrid?: Grid;
  workingGrid?: Grid;
}
