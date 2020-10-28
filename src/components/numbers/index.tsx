import React, { FC } from 'react';

import { SudokuNumber } from 'typings';

import Button from './button';
import { Container } from './styles';

const Numbers: FC = () => (
  <Container>
    {([1, 2, 3, 4, 5, 6, 7, 8, 9] as SudokuNumber[]).map((number) => (
      <Button key={`number-button-${number}`} value={number} />
    ))}
  </Container>
);
export default Numbers;
