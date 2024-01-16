/* eslint-disable react/prop-types */
export default function History({ historyItems, jumpTo }) {
  const historyList = historyItems.map((history, move) => {
    let description = "";
    if (move > 0) {
      description = `Go to move # ${move}`;
    } else {
      description = "Go to Game start";
    }
    return (
      <li
        onClick={() => jumpTo(move)}
        key={move}
        className="text-center cursor-pointer py-1 bg-stone-300 mt-1 max-w-fit px-2 mx-auto rounded-md"
      >
        {description}
      </li>
    );
  });
  return <ol>{historyList}</ol>;
}
