import React from 'react';
import PlayRandomMoveEngine from './Chess';

type Props = {};

const Game = (props: Props) => {
  return (
    <div
      id="console"
      className="w-[420px] h-[370px] p-6 2xl:w-[530px] 2xl:h-[475px] 2xl:p-8 border border-black flex items-center justify-between rounded-lg relative"
    >
      <img
        src="/icons/console/bolt-up-left.svg"
        alt=""
        className="absolute h-5 w-5 top-2 left-2 opacity-70"
      />
      <img
        src="/icons/console/bolt-up-right.svg"
        alt=""
        className="absolute h-5 w-5 top-2 right-2 opacity-70"
      />
      <img
        src="/icons/console/bolt-down-left.svg"
        alt=""
        className="absolute h-5 w-5 bottom-2 left-2 opacity-70"
      />
      <img
        src="/icons/console/bolt-down-right.svg"
        alt=""
        className="absolute h-5 w-5 bottom-2 right-2 opacity-70"
      />
      <div
        id="game-screen"
        className="max-2xl:w-[320px] max-2xl:h-[320px] w-[400px] h-[400px] mx-auto flex flex-wrap"
      >
        <PlayRandomMoveEngine />
      </div>
    </div>
  );
};

export default Game;
