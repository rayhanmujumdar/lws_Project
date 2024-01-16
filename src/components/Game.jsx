import { useState } from "react";
import Board from "./Board";
import History from "./History";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXisNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquare = history[currentMove];
  const handleOnPlay = (nextSquare) => {
    setXisNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setCurrentMove(nextHistory.length - 1);
    setHistory(nextHistory);
  };
  const jumpTo = (move) => {
    setCurrentMove(move);
    setXisNext(move % 2 === 0);
  };
  return (
    <div className="flex justify-center gap-x-5 mt-10">
      <div>
        <Board
          squares={currentSquare}
          xIsNext={xIsNext}
          onPlay={handleOnPlay}
        />
      </div>
      <div>
        <History historyItems={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
}
