const arrToFEN = (board) => {
  let counter = 0;
  let FENString = "";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "_") counter++;
      else {
        if (counter !== 0) FENString = FENString.concat(counter);
        FENString = FENString.concat("Q");
        counter = 0;
      }
    }
    if (counter !== 0) {
      FENString = FENString.concat(counter);
      counter = 0;
    }
    if (i !== 7) FENString = FENString.concat("/");
  }
  return FENString.concat(" w - - 0 1");
};

export default arrToFEN;
