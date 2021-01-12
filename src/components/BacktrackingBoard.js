import Chessground from "react-chessground";
import { useState, useEffect, useRef } from "react";
import "react-chessground/dist/styles/chessground.css";
import arrToFEN from "./utils/arrToFEN.js";
import initializeBoard from "./utils/initializeBoard.js";
import isSolution from "./utils/isSolution.js";

const BacktrackingBoard = (props) => {
  const { solutions, setSolutions } = props;
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
    const timer = setTimeout(() => {
      updateQueen();
    }, 0);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h1>Backtracking</h1>
      <Chessground
        animation={{ enabled: false }}
        fen={arrToFEN(board)}
        coordinates={false}
        viewOnly={true}
      />
    </div>
  );
};

export default BacktrackingBoard;
