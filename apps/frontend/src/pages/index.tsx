import React from "react";
import Head from "next/head";
import Sidebar from "@components/Sidebar";
import PlayMenu from "@components/PlayMenu";
import ChessboardContainer from "@components/Chessboard/ChessboardContainer";

// text-blue-600

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-800">
      <Head>
        <title>Chess Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex	">
        <Sidebar />
        <ChessboardContainer />
        <PlayMenu />
      </div>
    </div>
  );
};

export default Home;
