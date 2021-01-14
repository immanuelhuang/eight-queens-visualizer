const findMinConflicts = (board, index) => {
  const conflictArr = [0, 0, 0, 0, 0, 0, 0, 0];
  board[index] = ["_", "_", "_", "_", "_", "_", "_", "_"];
  for (let i = 0; i < 8; i++) {
    let counter = 0;
    board[index][i] = "X";

    // col
    for (let j = 0; j < 8; j++) {
      if (board[j][i] === "X") counter++;
    }

    let m = index;
    let n = i;
    while (m >= 0 && n >= 0) {
      if (board[m][n] === "X") counter++;
      m--;
      n--;
    }
    m = index;
    n = i;
    while (m >= 0 && n < 8) {
      if (board[m][n] === "X") counter++;
      m--;
      n++;
    }
    m = index;
    n = i;
    while (m < 8 && n >= 0) {
      if (board[m][n] === "X") counter++;
      m++;
      n--;
    }
    m = index;
    n = i;
    while (m < 8 && n < 8) {
      if (board[m][n] === "X") counter++;
      m++;
      n++;
    }

    conflictArr[i] = counter - 5;
    board[index][i] = "_";
  }
  return conflictArr;
};

export default findMinConflicts;
