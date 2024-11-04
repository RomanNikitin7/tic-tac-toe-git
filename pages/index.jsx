import { Header } from "../components/header";
import { useState } from "react";
import {
  GameField,
  GameTitle,
  GameInfo,
  UseGameState,
  winnerSequence,
} from "../components/game";

export default function HomePage() {
  const [playersCount] = useState(2);
  const { cells, currentMove, nextMove, handleCellClick, winnerSequence } =
    UseGameState(playersCount);
  return (
    <div className="bg-red-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          currentMove={currentMove}
          playersCount={playersCount}
          className={"mt-4"}
        />
        <GameField
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          className={"mt-5"}
        />
      </main>
    </div>
  );
}
