import Chessboard from "chessboardjsx";
import { useState, useEffect, useRef } from "react";
import arrToFEN from "./utils/arrToFEN.js";
import initializeBoard from "./utils/initializeBoard.js";
import isSolution from "./utils/isSolution.js";

const BacktrackingBoard = (props) => {
  const { started, timeInterval, solutions, setSolutions } = props;
  let queens = useRef([null, null, null, null, null, null, null, null]);
  const [board, setBoard] = useState(initializeBoard());
  let tempBoard = useRef();
  let depth = useRef(0);

  function updateQueen() {
    if (queens.current[depth.current] === null)
      queens.current[depth.current] = 0;
    else queens.current[depth.current]++;
    tempBoard.current = initializeBoard();
    for (let i = 0; i < 8; i++) tempBoard.current[i][queens.current[i]] = "X";
    setBoard(JSON.parse(JSON.stringify(tempBoard.current)));
    if (isSolution(tempBoard.current) === true)
      setSolutions(solutions.concat(arrToFEN(tempBoard.current)));
    else if (queens.current[depth.current] === 8) {
      queens.current[depth.current] = null;
      depth.current--;
    } else if (isSolution(tempBoard.current) === false) depth.current++;
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
        calcWidth={({ screenWidth, screenHeight }) =>
          Math.min(
            screenWidth < 700 ? screenWidth / 1.1 : screenWidth / 1.5,
            screenHeight / 1.3
          )
        }
        transitionDuration={0}
        position={arrToFEN(board)}
        showNotation={false}
        allowDrag={() => false}
      />
    </div>
  );
};

export default BacktrackingBoard;
