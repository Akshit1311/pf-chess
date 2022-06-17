import React from "react";

const Box: React.FC<{ isBlack: boolean; row: number; col: number }> = ({ isBlack, row, col }) => {
  return (
    <div className={`h-[10vh] w-[10vh] ${isBlack ? "bg-zinc-700" : "bg-white"} relative`}>
      <div className={`absolute top-1 left-2 ${isBlack ? "text-white" : ""}`}>
        {col === 0 && 8 - row}
      </div>
      <div className={`absolute bottom-1 right-2  ${isBlack ? "text-white" : ""}`}>
        {row === 7 && String.fromCharCode(97 + col)}
      </div>
    </div>
  );
};

export default Box;
