import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { IconStar } from "./icons/star-icon";
import { IconUser } from "./icons/user-icon";
import { IconHistory } from "./icons/history-icon";

export function GameTitle({ playersCount }) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="text-teal-600 flex items-center gap-x-2 text-xs leading-tight -mb-0.5"
      >
        <ArrowLeftIcon />
        На главную
      </Link>
      <h1 className="text-4xl leading-tight">Крестики нолики</h1>
      <div className="flex items-center text-slate-400 text-xs gap-x-3 mt-px">
        <IconStar />
        <div className="flex items-center gap-x-1">
          <IconUser /> {playersCount}
        </div>
        <div className="flex items-center gap-x-1">
          <IconHistory />1 мин на ход
        </div>
      </div>
    </div>
  );
}
