import React from "react";
import Chessboard from "./Chessboard";

const ChessboardContainer: React.FC = () => {
  return (
    <div className="flex p-6 px-12 ">
      <Chessboard />
    </div>
  );
};

export default ChessboardContainer;
