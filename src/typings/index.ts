export type SudokuNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type SudokuInteger = 0 | SudokuNumber;
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
export type Grid = [Row, Row, Row, Row, Row, Row, Row, Row, Row];
