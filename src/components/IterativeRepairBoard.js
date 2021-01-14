import Chessboard from "chessboardjsx";
import { useState, useEffect, useRef } from "react";
import arrToFEN from "./utils/arrToFEN.js";
import initializeBoard from "./utils/initializeBoard.js";
import isSolution from "./utils/isSolution.js";
import findMinConflicts from "./utils/findMinConflicts.js";

const IterativeRepairBoard = (props) => {
  const { started, timeInterval, setStarted } = props;
  let queens = useRef([0, 1, 2, 3, 4, 5, 6, 7]);
  const [board, setBoard] = useState(
    (() => {
      const tempBoard = initializeBoard();
      for (let i = 0; i < 8; i++) tempBoard[i][queens.current[i]] = "X";
      return tempBoard;
    })()
  );
  let tempBoard = useRef();
  let depth = useRef(0);
  const [row, setRow] = useState(depth.current);
  let restart = useRef(false);

  function updateQueen() {
    if (isSolution(board) === true && !restart.current) {
      setStarted(false);
      queens.current = [0, 1, 2, 3, 4, 5, 6, 7];
      depth.current = 0;
      restart.current = true;
    } else if (isSolution(board) && restart.current) {
      restart.current = false;
      tempBoard.current = initializeBoard();
      for (let i = 0; i < 8; i++) tempBoard.current[i][queens.current[i]] = "X";
      setBoard(JSON.parse(JSON.stringify(tempBoard.current)));
    } else {
      if (depth.current === 8) depth.current = 0;
      const conflictArr = findMinConflicts([...board], depth.current);
      const minIndex = conflictArr.indexOf(Math.min(...conflictArr));
      queens.current[depth.current] = minIndex;
      depth.current++;
      setRow(depth.current);
      tempBoard.current = initializeBoard();
      for (let i = 0; i < 8; i++) tempBoard.current[i][queens.current[i]] = "X";
      setBoard(JSON.parse(JSON.stringify(tempBoard.current)));
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
    <div style={{ textAlign: "center" }}>
      <Chessboard
        calcWidth={({ screenWidth, screenHeight }) =>
          Math.min(
            screenWidth < 700 ? screenWidth / 1.1 : screenWidth / 1.5,
            screenHeight / 1.5
          )
        }
        transitionDuration={0}
        position={arrToFEN(board)}
        showNotation={false}
        allowDrag={() => false}
      />
      <h2>
        {isSolution(board) !== true
          ? `Repairing Row ${row + 1}`
          : "Iterative Repair Completed"}
      </h2>
    </div>
  );
};

export default IterativeRepairBoard;
