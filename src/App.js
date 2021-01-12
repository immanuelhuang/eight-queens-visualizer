import "./App.css";
import PermutationBoard from "./components/PermutationBoard.js";
import BacktrackingBoard from "./components/BacktrackingBoard.js";
import { useState } from "react";
import Chessground from "react-chessground";
import "react-chessground/dist/styles/chessground.css";
import uniqid from "uniqid";

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

      {algorithmState === "blank" ? (
        <Chessground
          animation={{ enabled: false }}
          fen={"8/8/8/8/8/8/8/8 w - - 0 1"}
          coordinates={false}
          viewOnly={true}
        />
      ) : null}

      {solutions.map((board, index) => (
        <div style={{ margin: "10px 0" }}>
          <h1>Solution {index + 1}</h1>
          <Chessground
            animation={{ enabled: false }}
            fen={board}
            coordinates={false}
            viewOnly={true}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
