import React from "react";
import Image from "next/image";

// assets
import WQIcon from "@assets/wq.png";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar h-screen w-fit bg-zinc-900 p-2 text-white">
      <Image src={WQIcon} height={60} width={60} />
    </div>
  );
};

export default Sidebar;
