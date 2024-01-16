/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import calculateSquare from "../lib/calculateSquare";
import Square from "./Square";

export default function Board({ squares, xIsNext, onPlay }) {
  const [status, setStatus] = useState("Next player: X");
  const nextSquares = squares.slice();
  const winner = calculateSquare(nextSquares);
  const handleClick = (i) => {
    if (nextSquares[i] || calculateSquare(nextSquares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
      setStatus("Next player: O");
    } else {
      nextSquares[i] = "O";
      setStatus("Next player: X");
    }
    onPlay(nextSquares);
  };
  useEffect(() => {
    if (winner) {
      setStatus(`Winner: ${winner}`);
    }
  }, [winner]);
  return (
    <div>
      <p className="text-center">{status}</p>
      <div className="flex flex-wrap w-44 justify-center items-center mx-auto">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareChange={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
