import React from "react";

const AvatarCard: React.FC = () => {
  return (
    <div className="flex">
      <div className="mr-2 h-[5vh] w-[5vh] rounded-full bg-zinc-600"></div>
      <div>
        <div className="text-base text-zinc-200">Name</div>
        <div className="text-sm text-zinc-400">Rank</div>
      </div>
    </div>
  );
};

export default AvatarCard;
