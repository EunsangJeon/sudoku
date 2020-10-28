import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { IReducer, selectBlock } from 'reducers';
import { Index, SudokuInteger } from 'typings';

import { Container } from './styles';

interface IProps {
  colIndex: Index;
  rowIndex: Index;
}

interface IState {
  isActive: boolean;
  isPuzzle: boolean;
  value: SudokuInteger;
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ challengeGrid, selectedBlock, workingGrid }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
    })
  );

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  function handleClick() {
    if (!state.isActive) {
      dispatch(selectBlock([rowIndex, colIndex]));
    }
  }

  return (
    <Container
      active={state.isActive}
      onClick={handleClick}
      puzzle={state.isPuzzle}
    >
      {state.value || ''}
    </Container>
  );
};

export default Block;
