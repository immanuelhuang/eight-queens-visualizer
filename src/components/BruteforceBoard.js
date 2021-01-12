import Chessboard from "chessboardjsx";
import { useState, useEffect, useRef } from "react";
import arrToFEN from "./utils/arrToFEN.js";
import initializeBoard from "./utils/initializeBoard.js";
import isSolution from "./utils/isSolution.js";

const BruteforceBoard = (props) => {
  const { started, timeInterval, solutions, setSolutions } = props;
  let queens = useRef([0, 0, 0, 0, 0, 0, 0, 0]);
  const [board, setBoard] = useState(
    (() => {
      const tempBoard = initializeBoard();
      for (let i = 0; i < 8; i++) tempBoard[i][queens.current[i]] = "X";
      return tempBoard;
    })()
  );
  let tempBoard = useRef();

  function updateQueen() {
    if (queens.current.every((queen) => queen === 0)) console.log("START");
    if (queens.current.every((queen) => queen === 7)) console.log("DONE");
    else {
      queens.current[0]++;
      while (queens.current.includes(8)) {
        const index = queens.current.indexOf(8);
        queens.current[index] = 0;
        queens.current[index + 1]++;
      }
      tempBoard.current = initializeBoard();
      for (let i = 0; i < 8; i++) tempBoard.current[i][queens.current[i]] = "X";
      setBoard(JSON.parse(JSON.stringify(tempBoard.current)));
      if (isSolution(board) === true)
        setSolutions(solutions.concat(arrToFEN(board)));
    }
  }

  useEffect(() => {
    if (started) {
      const timer = setTimeout(() => {
        updateQueen();
      }, timeInterval);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div>
      <Chessboard
        transitionDuration={0}
        position={arrToFEN(board)}
        notation={false}
      />
    </div>
  );
};

export default BruteforceBoard;
