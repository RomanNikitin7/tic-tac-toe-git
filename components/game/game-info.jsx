import clsx from "clsx";
import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";

import avatar1 from "./images/avatar.png";
import avatar2 from "./images/avatar-1.png";
import avatar3 from "./images/avatar-2.png";
import avatar4 from "./images/avatar-3.png";
import { useEffect, useState } from "react";

const playerInfo = [
  {
    id: 1,
    symbol: GAME_SYMBOLS.CROSS,
    avatar: avatar1,
    name: "Paromovevg",
    rating: 1230,
  },
  {
    id: 2,
    symbol: GAME_SYMBOLS.ZERO,
    avatar: avatar2,
    name: "VereIntedinglapotur",
    rating: 850,
  },
  {
    id: 3,
    symbol: GAME_SYMBOLS.TRIANGLE,
    avatar: avatar3,
    name: "Lara",
    rating: 1400,
  },
  {
    id: 4,
    symbol: GAME_SYMBOLS.SQUARE,
    avatar: avatar4,
    name: "Додик",
    rating: 760,
  },
];

export function GameInfo({ className, playersCount, currentMove }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white py-4 px-8 rounded-2xl shadow-md items-center justify-between grid grid-cols-2 gap-y-3",
      )}
    >
      {playerInfo.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          currentMove={currentMove}
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 1}
          isTimerRunning={currentMove === player.symbol}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning }) {
  const [seconds, setSeconds] = useState(60);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);
      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isTimerRunning]);

  function getTimerColor() {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  }
  return (
    <div className="flex items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="absolute w-5 h-5 bg-white rounded-full shadow -top-1 -left-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
        <Profile
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
          className="w-44"
        />
      </div>
      <div
        className={clsx("mx-3 w-px h-6 bg-slate-200", isRight && "order-2")}
      />
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
