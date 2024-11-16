import { Header } from "../components/header";
import { UiModal, UiButton } from "../components/ui-kit";
import { useState } from "react";
import {
  GameField,
  GameTitle,
  GameInfo,
  UseGameState,
  winnerSequence,
} from "../components/game";
import { GameSymbol } from "../components/game/game-symbol";

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  } = UseGameState(playersCount);
  return (
    <div className="bg-red-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          currentMove={currentMove}
          playersCount={playersCount}
          className={"mt-4"}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="my-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        <UiModal isOpen={winnerSymbol} onClose={() => console.log("close")}>
          <UiModal.Header>Игра завершена!</UiModal.Header>
          <UiModal.Body>
            <div className="text-sm">
              Победитель: <span className="text-teal-600">Paromovevg</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton variant="outline" size="md">
              Вернуться
            </UiButton>
            <UiButton variant="primary" size="md">
              Играть снова
            </UiButton>
          </UiModal.Footer>
        </UiModal>
        <GameField
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
          className={"mt-5"}
        />
      </main>
    </div>
  );
}
