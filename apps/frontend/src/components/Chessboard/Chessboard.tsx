import React from "react";
import AvatarCard from "./AvatarCard";
import Box from "./Box";

const Chessboard = () => {
  return (
    <div className="overflow-hidden">
      <AvatarCard />
      <div className="grid-rows-8 my-2 grid w-fit grid-cols-8 overflow-hidden rounded-lg shadow-lg ">
        {Array.from(Array(8).keys()).map((i) => (
          <div key={i} className="grid-cols-8">
            {Array.from(Array(8).keys()).map((j) => (
              <Box key={j} isBlack={(i + j) % 2 == 0} row={j} col={i} />
            ))}
          </div>
        ))}
      </div>
      <AvatarCard />
    </div>
  );
};

export default Chessboard;
