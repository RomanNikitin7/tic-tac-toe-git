import clsx from "clsx";
import { UiButton } from "../ui-kit";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white pt-5 pb-7 px-8 rounded-2xl shadow-md",
      )}
    >
      <div className="flex items-center gap-x-3">
        <div className="mr-auto">
          <div className="flex items-center gap-x-1 text-xl font-semibold">
            Ход: <ZeroIcon className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-x-1 text-slate-400 text-sm">
            Следующий: <CrossIcon />
          </div>
        </div>
        <UiButton size={"md"} variant={"primary"}>
          Ничья
        </UiButton>
        <UiButton size={"md"} variant={"outline"}>
          Сдаться
        </UiButton>
      </div>
      <div className="mt-3 grid grid-cols-[repeat(19,_30px)] pt-px pl-px">
        {cells.map((_, i) => {
          return (
            <button
              key={i}
              className="w-[30px] h-[30px] border border-solid border-slate-200 flex items-center justify-center -mt-px -ml-px"
            ></button>
          );
        })}
      </div>
    </div>
  );
}
