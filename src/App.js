import "./App.css";
import { useState } from "react";
import uniqid from "uniqid";
import PermutationBoard from "./components/PermutationBoard.js";
import BacktrackingBoard from "./components/BacktrackingBoard.js";
import Chessboard from "chessboardjsx";

const App = () => {
  const [solutions, setSolutions] = useState([]);
  const [algorithmState, setAlgorithmState] = useState("blank");

  return (
    <div>
      <button
        onClick={() => {
          setAlgorithmState("blank");
          setSolutions([]);
        }}
        disabled={algorithmState === "blank" ? true : false}
      >
        Blank
      </button>

      <button
        onClick={() => {
          setAlgorithmState("permutation");
          setSolutions([]);
        }}
        disabled={algorithmState === "permutation" ? true : false}
      >
        Permutation
      </button>

      <button
        onClick={() => {
          setAlgorithmState("backtracking");
          setSolutions([]);
        }}
        disabled={algorithmState === "backtracking" ? true : false}
      >
        backtracking
      </button>

      {algorithmState === "permutation" ? (
        <PermutationBoard solutions={solutions} setSolutions={setSolutions} />
      ) : null}

      {algorithmState === "backtracking" ? (
        <BacktrackingBoard solutions={solutions} setSolutions={setSolutions} />
      ) : null}

      {algorithmState === "blank" ? <Chessboard showNotation={false} /> : null}

      {solutions.map((board, index) => (
        <div key={uniqid()} style={{ margin: "10px 0" }}>
          <h1>Solution {index + 1}</h1>
          <Chessboard
            position={board}
            showNotation={false}
            allowDrag={() => false}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
