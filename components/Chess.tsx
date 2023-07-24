import { useState } from 'react';
//@ts-ignore
import Chess from 'chess.js';
import { Chessboard } from 'react-chessboard';

export default function PlayRandomMoveEngine() {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move: { from: any; to: any; promotion: string }) {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0)
      return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  }

  function onDrop(sourceSquare: any, targetSquare: any) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }

  return (
    <Chessboard
      customBoardStyle={{
        borderRadius: '5px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5 ',
      }}
      customDarkSquareStyle={{ backgroundColor: 'rgba(1, 22, 39, 0.84)' }}
      customLightSquareStyle={{ backgroundColor: 'rgb(23, 85, 83)' }}
      position={game.fen()}
      onPieceDrop={onDrop}
    />
  );
}
