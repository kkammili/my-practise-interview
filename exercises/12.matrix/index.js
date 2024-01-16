// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
      // Create an NxN matrix filled with zeros
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1; // Starting number
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // Fill top row
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = num++;
    }
    startRow++;

    // Fill last column
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = num++;
    }
    endCol--;

    // Fill bottom row
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = num++;
    }
    endRow--;

    // Fill first column
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = num++;
    }
    startCol++;
  }

  return matrix;
}

module.exports = matrix;
