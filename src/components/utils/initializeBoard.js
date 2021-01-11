const initializeBoard = () => {
  let tempBoard = [];
  for (let i = 0; i < 8; i++) {
    tempBoard.push([]);
    for (let j = 0; j < 8; j++) {
      tempBoard[i].push("_");
    }
  }
  return tempBoard;
};

export default initializeBoard;
