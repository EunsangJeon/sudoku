export type BlockCoords = [Index, Index];
export type Grid = [Row, Row, Row, Row, Row, Row, Row, Row, Row];
export type Index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Row = [
  SudokuInteger,
  SudokuInteger,
  SudokuInteger,
  SudokuInteger,
  SudokuInteger,
  SudokuInteger,
  SudokuInteger,
  SudokuInteger,
  SudokuInteger
];
export type Square = [SquareRow, SquareRow, SquareRow];
export type SquareRow = [SudokuInteger, SudokuInteger, SudokuInteger];
export type SudokuNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type SudokuInteger = 0 | SudokuNumber;
