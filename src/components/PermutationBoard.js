import Chessground from "react-chessground";
import { useState, useEffect, useRef } from "react";
import "react-chessground/dist/styles/chessground.css";
import arrToFEN from "./utils/arrToFEN.js";
import initializeBoard from "./utils/initializeBoard.js";
import isSolution from "./utils/isSolution.js";

const PermutationBoard = () => {
  let queens = useRef([0, 0, 0, 0, 0, 0, 2, 0]);
  const [board, setBoard] = useState([
    ["X", "_", "_", "_", "_", "_", "_", "_"],
    ["X", "_", "_", "_", "_", "_", "_", "_"],
    ["X", "_", "_", "_", "_", "_", "_", "_"],
    ["X", "_", "_", "_", "_", "_", "_", "_"],
    ["X", "_", "_", "_", "_", "_", "_", "_"],
    ["X", "_", "_", "_", "_", "_", "_", "_"],
    ["X", "_", "_", "_", "_", "_", "_", "_"],
    ["X", "_", "_", "_", "_", "_", "_", "_"],
  ]);
  let tempBoard = useRef();

  function updateQueen() {
    if (queens.current.every((queen) => queen === 0)) {
      console.log("START");
    }
    if (queens.current.every((queen) => queen === 7)) {
      console.log("DONE");
    } else {
      queens.current[0]++;
      while (queens.current.includes(8)) {
        const index = queens.current.indexOf(8);
        queens.current[index] = 0;
        queens.current[index + 1]++;
      }
      tempBoard.current = initializeBoard();
      for (let i = 0; i < 8; i++) {
        tempBoard.current[i][queens.current[i]] = "X";
      }
      setBoard(JSON.parse(JSON.stringify(tempBoard.current)));
      if (isSolution(board) === true) console.log(board);
    }
  }

  useEffect(() => {
    setTimeout(updateQueen, 0);
  });

  return (
    <div>
      <h1>Permutations</h1>
      <Chessground
        animation={{ enabled: false }}
        fen={arrToFEN(board)}
        coordinates={false}
        viewOnly={true}
      />
    </div>
  );
};

export default PermutationBoard;
