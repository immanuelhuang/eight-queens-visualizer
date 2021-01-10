import "./App.css";
import Chessground from "react-chessground";
import "react-chessground/dist/styles/chessground.css";

function App() {
  return (
    <div>
      <Chessground
        coordinates={false}
        viewOnly={true}
        fen={"8/8/8/8/8/8/8/8 w - - 0 1"}
      />
    </div>
  );
}

export default App;
