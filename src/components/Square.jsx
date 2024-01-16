/* eslint-disable react/prop-types */
export default function Square({ value, onSquareChange }) {
  return (
    <button
      onClick={onSquareChange}
      className="w-12 h-12 border border-gray-300 leading-9 text-xl m-1 bg-gray-100 uppercase"
    >
      {value}
    </button>
  );
}
