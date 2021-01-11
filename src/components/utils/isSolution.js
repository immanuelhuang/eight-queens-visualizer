const isSolution = (board) => {
  // Check that there's 8 Queens
  let counter = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "X") {
        counter++;
      }
    }
  }
  if (counter !== 8) return "Not 8 queens";

  // Check rows
  for (let i = 0; i < 8; i++) {
    if (!board[i].includes("X")) return "Not row";
  }

  // Check cols
  for (let i = 0; i < 8; i++) {
    counter = 0;
    for (let j = 0; j < 8; j++) {
      if (board[j][i] === "X") counter++;
    }
    if (counter !== 1) return "Not col";
  }

  // Check diagonals
  for (let i = 0; i < 8; i++) {
    counter = 0;
    let m = i;
    for (let j = 0; j <= i; j++) {
      if (board[m][j] === "X") counter++;
      if (counter > 1) return "Not diag top";
      m--;
    }
  }
  for (let i = 7; i >= 0; i--) {
    counter = 0;
    let m = i;
    for (let j = 7; j >= i; j--) {
      if (board[m][j] === "X") counter++;
      if (counter > 1) return "Not diag bottom";
      m++;
    }
  }

  // Check antidiagonals
  for (let i = 7; i >= 0; i--) {
    counter = 0;
    let m = i;
    for (let j = 0; j <= 7 - i; j++) {
      if (board[m][j] === "X") counter++;
      if (counter > 1) return "Not antidiag top";
      m++;
    }
  }
  for (let i = 0; i < 8; i++) {
    counter = 0;
    let m = i;
    for (let j = 7; j >= 7 - i; j--) {
      if (board[m][j] === "X") counter++;
      if (counter > 1) return "Not antidiag bottom";
      m--;
    }
  }

  return true;
};

export default isSolution;
