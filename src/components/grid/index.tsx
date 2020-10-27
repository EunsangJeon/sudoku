import React, { FC, Children, useCallback, useEffect } from 'react';
import useMouseTrap from 'react-hook-mousetrap';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { createGrid, IReducer, selectBlock } from 'reducers';

import Block from './block';
import { Container, Row } from './styles';
import { BlockCoords, Index } from 'typings';

interface IState {
  selectedBlock?: BlockCoords;
}

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
    selectedBlock,
  }));
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);

  useEffect(() => {
    create();
  }, [create]);

  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as Index,
          state.selectedBlock[1],
        ])
      );
    }
  }

  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0) {
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as Index,
        ])
      );
    }
  }

  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8) {
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as Index,
        ])
      );
    }
  }

  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as Index,
          state.selectedBlock[1],
        ])
      );
    }
  }

  useMouseTrap('down', moveDown);
  useMouseTrap('left', moveLeft);
  useMouseTrap('right', moveRight);
  useMouseTrap('up', moveUp);

  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  colIndex={colIndex as Index}
                  rowIndex={rowIndex as Index}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
