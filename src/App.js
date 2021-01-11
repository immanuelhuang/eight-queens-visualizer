import "./App.css";
import PermutationBoard from "./components/PermutationBoard.js";
import { useState } from "react";
import Chessground from "react-chessground";
import "react-chessground/dist/styles/chessground.css";
import uniqid from "uniqid";

const App = () => {
  const [solutions, setSolutions] = useState([]);

  return (
    <div>
      <PermutationBoard solutions={solutions} setSolutions={setSolutions} />
      {solutions.map((board) => (
        <div key={uniqid()} style={{ margin: "10px" }}>
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
