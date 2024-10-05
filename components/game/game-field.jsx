import clsx from "clsx";
import { UiButton } from "../ui-kit";
import { GameSymbol } from "./game-symbol";
import { UseGameState } from "./use-game-state";

export function GameField({ className, playersCount }) {
  const { cells, currentMove, nextMove, handleCellClick } =
    UseGameState(playersCount);
  const actions = (
    <>
      <UiButton size={"md"} variant={"primary"}>
        Ничья
      </UiButton>
      <UiButton size={"md"} variant={"outline"}>
        Сдаться
      </UiButton>
    </>
  );
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, i) => {
          return (
            <GameCell key={i} onClick={() => handleCellClick(i)}>
              {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
            </GameCell>
          );
        })}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({ className, children }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white pt-5 pb-7 px-8 rounded-2xl shadow-md",
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex items-center gap-x-3">
      <div className="mr-auto">
        <div className="flex items-center gap-x-1 text-xl font-semibold">
          Ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-x-1 text-slate-400 text-sm">
          Следующий: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="mt-3 grid grid-cols-[repeat(19,_30px)] pt-px pl-px">
      {children}
    </div>
  );
}

function GameCell({ children, onClick }) {
  return (
    <button
      className="w-[30px] h-[30px] border border-solid border-slate-200 flex items-center justify-center -mt-px -ml-px"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
