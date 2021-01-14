import "./App.css";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import BruteforceBoard from "./components/BruteforceBoard.js";
import BacktrackingBoard from "./components/BacktrackingBoard.js";
import IterativeRepairBoard from "./components/IterativeRepairBoard.js";
import Chessboard from "chessboardjsx";

const App = () => {
  const [solutions, setSolutions] = useState([]);
  const [algorithm, setAlgorithm] = useState("blank");
  const [timeInterval, setTimeInterval] = useState(250);
  const [started, setStarted] = useState(false);

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  };

  return (
    <div>
      <div id="header">
        <h1>Eight Queens Visualizer</h1>
      </div>

      <div id="main-container">
        <div id="board-container">
          {algorithm === "blank" ? (
            <Chessboard
              calcWidth={({ screenWidth, screenHeight }) =>
                Math.min(
                  screenWidth <= 850 ? screenWidth / 1.1 : screenWidth / 1.5,
                  screenHeight / 1.5
                )
              }
              showNotation={false}
            />
          ) : null}
          {algorithm === "brute-force" ? (
            <BruteforceBoard
              setStarted={setStarted}
              started={started}
              timeInterval={timeInterval}
              solutions={solutions}
              setSolutions={setSolutions}
            />
          ) : null}
          {algorithm === "backtracking" ? (
            <BacktrackingBoard
              setAlgorithm={setAlgorithm}
              setStarted={setStarted}
              started={started}
              timeInterval={timeInterval}
              solutions={solutions}
              setSolutions={setSolutions}
            />
          ) : null}
          {algorithm === "iterative-repair" ? (
            <IterativeRepairBoard
              setAlgorithm={setAlgorithm}
              setStarted={setStarted}
              started={started}
              timeInterval={timeInterval}
              solutions={solutions}
              setSolutions={setSolutions}
            />
          ) : null}
        </div>

        <div
          id="controls-container"
          className={
            useWindowDimensions().width <= 850
              ? "controls-container-small"
              : "controls-container-big"
          }
        >
          <div id="range-container">
            <input
              type="range"
              id="interval-range"
              min="1"
              max="500"
              value={timeInterval}
              onChange={(e) => {
                setTimeInterval(e.target.value);
              }}
            />
            <label htmlFor="interval-range">Speed</label>
          </div>
          <div id="start-stop-container">
            <button
              className="start-button"
              onClick={() => {
                setStarted(true);
              }}
              disabled={started === true}
            >
              Start
            </button>
            <button
              className="stop-button"
              onClick={() => {
                setStarted(false);
              }}
              disabled={started === false}
            >
              Stop
            </button>
          </div>
          <div
            id="algorithms-container"
            className={
              useWindowDimensions().width <= 850
                ? "algorithms-container-small"
                : "algorithms-container-big"
            }
          >
            <button
              onClick={() => {
                setAlgorithm("brute-force");
                setSolutions([]);
              }}
              disabled={algorithm === "brute-force" ? true : false}
            >
              Brute Force
            </button>
            <button
              onClick={() => {
                setAlgorithm("backtracking");
                setSolutions([]);
              }}
              disabled={algorithm === "backtracking" ? true : false}
            >
              Backtracking
            </button>
            <button
              onClick={() => {
                setAlgorithm("iterative-repair");
                setSolutions([]);
              }}
              disabled={algorithm === "iterative-repair" ? true : false}
            >
              Iterative Repair
            </button>
          </div>
        </div>
      </div>

      <div id="solutions-container">
        {solutions.map((board, index) => (
          <div key={uniqid()}>
            <h2>Solution {index + 1}</h2>
            <Chessboard
              calcWidth={({ screenWidth }) =>
                screenWidth <= 850 ? screenWidth / 2.5 : screenWidth / 4.9
              }
              position={board}
              showNotation={false}
              allowDrag={() => false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
